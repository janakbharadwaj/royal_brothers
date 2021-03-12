import moment from "moment";
import React from "react";
import styles from "./Orders.module.css";

function HistoryCardMonth({
  bikeId,
  pickup_date,
  price,
  deposit,
  month,
  expiry,
  index,
}) {
  const { _id, bike_name, bike_image } = bikeId;

  return (
    <div className={styles.HistoryCard} key={_id}>
      <div>
        <h2>{index + 1}</h2>
      </div>
      <div>
        <div className={styles.HistoryCard__image}>
          <img src={bike_image} alt="bike"></img>
        </div>
        <div>
          <p>{bike_name}</p>
        </div>
      </div>
      <div className={styles.HistoryCard__details}>
        <div>
          <label>Pick up date</label>
          <h3>{pickup_date.substring(0, 10)}</h3>
        </div>
        <div>
          <label>Deposit</label>
          <h3>{deposit}</h3>
        </div>
        <div>
          <label>Months</label>
          <h3>{month}</h3>
        </div>
        <div>
          <label>Subscription Expiry</label>
          <h3>{moment(expiry).format("YYYY-MM-DD")}</h3>
        </div>
        <div>
          <label>Paid</label>
          <div>
            <button>₹ {price}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCardMonth;
