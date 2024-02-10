import { Col, Dropdown, Row, Form } from 'react-bootstrap';
import DatePicker from 'react-datepicker';
import styles from "./flight-form.module.css";

const FlightForm = ({ data, methods }) => {
  const { filters, airlines } = data;
  const {
    hanldeFrom,
    hanldeTo,
    handleAirlineSelection,
    handleDepartDateSelection
  } = methods;

  return (
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
                    key={airlineCode}
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
  )
}

export default FlightForm