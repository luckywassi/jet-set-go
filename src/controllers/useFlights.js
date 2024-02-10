import { useEffect, useMemo, useState } from 'react'
import { getFlights } from "../services/flights"
import { produce } from 'immer'
import { cloneDeep, uniqBy } from 'lodash';
import moment from 'moment';
import constants from '../utils/constants';
import { handleToastError } from "../utils"
import { useStore } from '../contexts/store/store';
import { setLoading } from '../contexts/store/actions';

const initialFiters = {
  from: "",
  to: "",
  airline: null,
  departDate: null
}

const uniqByAirlineCode = keys => keys?.displayData?.airlines?.[0].airlineCode;

const useFlights = () => {
  const [flightsData, setFlightsData] = useState([]);
  const [airlines, setAirlines] = useState([]);
  const [filters, setFilters] = useState(initialFiters);
  const [sortByPrice, setSortByPrice] = useState(null);

  const { dispatch } = useStore();

  useEffect(() => {

    //Scroll to top;
    window.scrollTo(0, 0);
    (async () => {
      dispatch(setLoading(true));
      const [res, error] = await getFlights();
      dispatch(setLoading(false));
      if (res) {
        setFlightsData(res.data.result);
        const _airlines = uniqBy(res.data.result, uniqByAirlineCode).map(flight => {
          const { displayData } = flight;
          const { airlines: [airline] = [{}] } = displayData || {};
          return airline;
        });
        setAirlines(_airlines)
      } else {
        handleToastError(error)
      }
    })();

  }, [dispatch]);

  const hanldeFrom = (e) => {
    const value = e.target.value;
    setFilters(produce(draft => {
      draft.from = value;
    }));
  }

  const hanldeTo = (e) => {
    const value = e.target.value;
    setFilters(produce(draft => {
      draft.to = value;
    }));
  }

  const filteredFlights = useMemo(() => {
    let filterData = flightsData;

    if (filters.from) {
      filterData = filterData.filter(flight => {
        const { displayData } = flight;
        const { source } = displayData || {};
        return source?.airport?.cityName?.toLowerCase()?.includes(filters.from?.toLowerCase());
      });
    }

    if (filters.to) {
      filterData = filterData.filter(flight => {
        const { displayData } = flight;
        const { destination } = displayData || {};
        return destination?.airport?.cityName?.toLowerCase()?.includes(filters.to?.toLowerCase());
      });
    }

    if (filters.airline) {
      filterData = filterData.filter(flight => {
        const { displayData } = flight;
        const { airlines: [{ airlineCode }] = [{}] } = displayData || {};
        return filters.airline.airlineCode === airlineCode;
      });
    }

    if (filters.departDate) {
      filterData = filterData.filter(flight => {
        const { displayData } = flight;
        const { source: { depTime } = {} } = displayData || {};
        const flightDate = moment(depTime).format("DD-MM-YYYY");
        const filterDate = moment(filters.departDate).format("DD-MM-YYYY");
        return flightDate === filterDate
      });
    }

    if (sortByPrice) {
      filterData = cloneDeep(filterData).sort((flightA, flightB) => {
        const { fare: fareA } = flightA;
        const { fare: fareB } = flightB;
        const value = sortByPrice === constants.asc ? fareA - fareB : fareB - fareA;
        return value > 0 ? 1 : -1
      });
    }


    return filterData;

  }, [filters, flightsData, sortByPrice]);

  const handleAirlineSelection = (airline) => {
    setFilters(produce(draft => {
      draft.airline = airline;
    }))
  }

  const handleDepartDateSelection = (departDate) => {
    setFilters(produce((draft => {
      draft.departDate = departDate
    })));
  }

  const handleSortByPrice = () => {
    if (sortByPrice === constants.asc) {
      setSortByPrice(constants.desc)
      return;
    }
    setSortByPrice(constants.asc);
  }

  const resetSort = () => {
    setSortByPrice(null);
  }

  return {
    data: {
      filters,
      flightsData: filteredFlights,
      airlines,
      sortByPrice
    },
    methods: {
      hanldeFrom,
      hanldeTo,
      handleAirlineSelection,
      handleDepartDateSelection,
      handleSortByPrice,
      resetSort
    }
  }
}

export default useFlights