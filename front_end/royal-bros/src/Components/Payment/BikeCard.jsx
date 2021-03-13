import React from "react";
import styles from "./BikeCard.module.css";
import moment from "moment";
import Payment from "./Payment";

function BikeCard({
  bike_name,
  bike_image,
  hourly_rate,
  kilometer_limit,
  info,
}) {
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  const [modalOpen, setModalOpen] = React.useState(false);
  const payload = { bike_name, bike_image, hourly_rate, info, kilometer_limit };
  return (
    <>
      <Payment
        payload={payload}
        total={moment(dropDate).diff(pickupDate, "hours") * hourly_rate}
        modalOpen={modalOpen}
        setModalOpen={setModalOpen}
      ></Payment>
      <div className={styles.BikeCard}>
        <h2>{bike_name}</h2>
        <div className={styles.BikeCard_image}>
          <img src={bike_image} alt="bikeImage"></img>
        </div>
        <div className={styles.BikeCard_stats}>
          <div>
            <div>{pickupTime}</div>
            <div>{pickupDate}</div>
          </div>
          <div className={styles.to}>to</div>
          <div>
            <div>{dropTime}</div>
            <div>{dropDate}</div>
          </div>
        </div>
        <div className={styles.BikeCard_footer}>
          <div>
            <b>₹ {moment(dropDate).diff(pickupDate, "hours") * hourly_rate} </b>
          </div>
          <div>
            <div>
              <button
                onClick={() => setModalOpen(true)}
                className={styles.BikeCard__button}
              >
                Book Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BikeCard;
