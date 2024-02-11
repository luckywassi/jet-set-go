import React from 'react'
import styles from "./flights.module.css";
import { Button, Stack } from 'react-bootstrap';
import classNames from 'classnames';
import useFlights from '../../controllers/useFlights';
import constants from '../../utils/constants';
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa';
import FlightCard from '../../components/flights/FlightCard';
import FlightForm from '../../components/flights/FlightForm';
import NotFound from '../../components/NotFound';

const Flights = () => {

  const { data, methods } = useFlights();
  const {
    handleSortByPrice,
    resetSort
  } = methods;

  const { flightsData, sortByPrice } = data;

  return (
    <div className='page-container'>
      <div className={styles["search-container"]}>
        <div className='section-center'>
          <FlightForm data={data} methods={methods} />
        </div>
      </div>
      <main className={classNames(styles.resultsSection)}>
        <div className={styles.resultsWrapper}>
          <Stack direction='horizontal' className='mb-2'>
            <Button
              className='d-flex justify-content-between align-items-center'
              variant='outline-secondary'
              onClick={handleSortByPrice}
            >
              <span className='me-2'>Sort By: Price</span>
              {sortByPrice === constants.asc && <span><FaSortNumericUpAlt /></span>}
              {sortByPrice === constants.desc && <span><FaSortNumericDownAlt /></span>}
            </Button>
            <Button variant='outline-danger' className='ms-2' onClick={resetSort}>
              Reset
            </Button>
          </Stack>

          {!flightsData?.length && <NotFound text="No Flights Found" />}

          {!!flightsData?.length && <div className={styles["results"]} data-testid="flight-results">
            {flightsData?.map?.(flight => <FlightCard flight={flight} key={flight.id} />)}
          </div>}

        </div>
      </main>
    </div>
  )
}

export default Flights