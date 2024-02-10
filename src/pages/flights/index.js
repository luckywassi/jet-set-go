import React from 'react'
import styles from "./flights.module.css";
import { Button, Col, Dropdown, Form, Row, Stack } from 'react-bootstrap';
import classNames from 'classnames';
import useFlights from '../../controllers/useFlights';
import DatePicker from "react-datepicker";
import constants from '../../utils/constants';
import { FaSortNumericDownAlt, FaSortNumericUpAlt } from 'react-icons/fa';
import FlightCard from '../../components/flights/FlightCard';

const Flights = () => {

  const { data, methods } = useFlights();
  const {
    hanldeFrom,
    hanldeTo,
    handleAirlineSelection,
    handleDepartDateSelection,
    handleSortByPrice,
    resetSort
  } = methods;
  const { filters, flightsData, airlines, sortByPrice } = data;

  return (
    <div className='page-container'>
      <div className={styles["search-container"]}>
        <div className='section-center'>
          <Row className='justify-content-center'>
            <Col xs={12} sm={6} md="auto" >
              <Form.Group className="mb-3" controlId="source">
                <Form.Label className={styles["form-label"]}>From</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='New Delhi, India'
                  value={filters.from}
                  onChange={hanldeFrom}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md="auto">
              <Form.Group className="mb-3" controlId="destination">
                <Form.Label className={styles["form-label"]}>To</Form.Label>
                <Form.Control
                  type='text'
                  placeholder='Bangaluru, India'
                  value={filters.to}
                  onChange={hanldeTo}
                />
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md="auto">
              <Form.Group className="mb-3" controlId="airline">
                <Form.Label className={styles["form-label"]}>Airline</Form.Label>
                <Dropdown className={styles.airlineDropdown}>
                  <Dropdown.Toggle
                    variant='secondary'
                    className={styles['select-airline-btn']}
                    id="dropdown-basic"
                  >
                    {filters.airline ? filters.airline.airlineName : "Select Airline"}
                  </Dropdown.Toggle>
                  <Dropdown.Menu>
                    {filters.airline && <>
                      <Dropdown.Item
                        onClick={() => handleAirlineSelection(null)}
                      >
                        Reset Selection
                      </Dropdown.Item>
                      <Dropdown.Divider />
                    </>}
                    {airlines.map((airline) => {
                      const { airlineCode, airlineName } = airline || {};
                      return (
                        <Dropdown.Item
                          onClick={() => handleAirlineSelection({ airlineCode, airlineName })}
                        >
                          {airlineName}
                        </Dropdown.Item>
                      )
                    })}
                  </Dropdown.Menu>
                </Dropdown>
              </Form.Group>
            </Col>
            <Col xs={12} sm={6} md="auto">
              <Form.Group className="mb-3" controlId="depart">
                <Form.Label className={styles["form-label"]}>Depart</Form.Label>
                <DatePicker
                  placeholderText="DD-MM-YYYY"
                  className={'form-control'}
                  selected={filters.departDate}
                  onChange={handleDepartDateSelection}
                  dateFormat="dd-MM-YYYY"
                  isClearable
                />
              </Form.Group>
            </Col>
          </Row>
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
          <div className={styles["results"]}>
            {flightsData?.map?.(flight => <FlightCard flight={flight} />)}
          </div>
        </div>
      </main>
    </div>
  )
}

export default Flights