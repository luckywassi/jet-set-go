import moment from "moment";
import { formatPrice } from "../../utils";
import styles from "./flight-card.module.css";
import classNames from "classnames";
import { FcAdvance } from "react-icons/fc";

const FlightCard = ({ flight }) => {

  const { fare, displayData } = flight;
  const { source, destination, airlines, stopInfo, totalDuration } = displayData || {};
  const airline = airlines?.[0];
  const price = formatPrice(fare);
  const depTime = moment(source?.depTime).format("HH:MM");
  const depDateTime = moment(source?.depTime).format("DD-MM-YYYY - hh:mm A");
  const arrTime = moment(destination?.depTime).format("HH:MM");
  const arrDateTime = moment(destination?.arrTime).format("DD-MM-YYYY - hh:mm A");

  return (
    <div className={styles["flight-details"]} data-testid="flight-card">
      <p className={styles.airlineName}>{airline.airlineName}
        <code className='ms-2'>
          ({airline.airlineCode}-{airline.flightNumber})
        </code>
      </p>
      <p className={classNames(styles.bottomText, styles.dateTime, 'mb-3')}>
        <span>
          {depDateTime}
        </span>
        <span>
          <FcAdvance />
        </span>
        <span>
          {arrDateTime}
        </span>
      </p>
      <div className={styles["timing-details"]}>
        <div className={styles.timingSection}>
          <div className={styles["detail-container"]}>
            <p className={styles.topText}>{depTime}</p>
            <p className={styles.bottomText}>
              {source?.airport?.cityName} - {source?.airport?.cityCode}
            </p>
          </div>
          <div className={styles["detail-container"]}>
            <p className={styles.topText}>{totalDuration}</p>
            <hr />
            <p className={styles.bottomText}>{stopInfo}</p>
          </div>
        </div>

        <div className={styles.timingSection}>
          <div className={styles["detail-container"]}>
            <p className={styles.topText}>{arrTime}</p>
            <p className={styles.bottomText}>
              {destination?.airport?.cityName} - {destination?.airport?.cityCode}
            </p>
          </div>
          <div className={styles["detail-container"]}>
            <p className={styles.topText}>{price}</p>
            <p className={styles.bottomText}>per adult</p>
          </div>
        </div>
      </div>
      <hr className='mt-2' />
    </div>
  )
}

export default FlightCard