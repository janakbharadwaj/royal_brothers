import React from "react";
import styles from "./Bikes.module.css";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import TimeConversion from "./utils";
const BikeItem = ({
  _id,
  bike_image,
  bike_name,
  pickUpDate,
  pickUpTime,
  dropOffDate,
  dropOffTime,
  handleBooking,
  hourly_rate,
}) => {
  const { info, selectedBike, setInfo } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  return (
    <>
      <div key={_id}>
        <div>
          <h4>{bike_name}</h4>
          <img src={bike_image} alt="bike" />
        </div>
        {/* <div className={styles.bikeItems__availability}>
          <p>Available at</p>
          <select>
            {["hello1", "hello2"].map((tag) => (
              <option key={tag} value={tag}>
                {tag}
              </option>
            ))}
          </select>
        </div> */}
        <div className={styles.bikeItems__timings}>
          <div>
            <p>{pickUpTime}</p>
            <p>{pickUpDate}</p>
          </div>
          <div>to</div>
          <div>
            <p>{dropOffTime}</p>
            <p>{dropOffDate}</p>
          </div>
        </div>
        <div className={styles.bikeItem__booking}>
          <div>
            <p>
              &#x20b9;{" "}
              {pickUpDate &&
                dropOffDate &&
                Number(TimeConversion(pickUpDate, dropOffDate)) *
                  24 *
                  hourly_rate}
              <br />( km included)
            </p>
          </div>
          <div>
            <button onClick={() => handleBooking(_id)}>BOOK</button>
          </div>
        </div>
      </div>
    </>
  );
};

export default BikeItem;
