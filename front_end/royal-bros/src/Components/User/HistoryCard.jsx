import React from "react";
import styles from "./Orders.module.css";

function HistoryCard({
  bikeId,
  pickup_date,
  drop_date,
  pickup_time,
  drop_time,
  index,
}) {
  const { _id, bike_name, bike_image, hourly_rate } = bikeId;

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
          <label>Pick up time</label>
          <h3>{pickup_time}</h3>
        </div>
        <div>
          <label>Drop date</label>
          <h3>{drop_date.substring(0, 10)}</h3>
        </div>
        <div>
          <label>Drop time</label>
          <h3>{drop_time}</h3>
        </div>
        <div>
          <label>Paid</label>
          <div>
            <button>₹ {hourly_rate * Math.floor(Math.random() * 1000)}</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default HistoryCard;
