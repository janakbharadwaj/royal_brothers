import React from "react";

import styles from "./Tarrif.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function BikeCard({
  bike_name,
  bike_image,
  hourly_rate,
  kilometer_limit,
  bookNowHandler,
}) {
  return (
    <div className={styles.BikeCard}>
      <h2>{bike_name}</h2>
      <div className={styles.BikeCard_image}>
        <img src={bike_image} alt="bikeImage"></img>
      </div>
      <Tabs>
        <div>
          <TabList className={styles.BikeCard__Nav}>
            <Tab className={styles.BikeCard__Nav__tab}>Hourly</Tab>
            <Tab className={styles.BikeCard__Nav__tab}>7 Days</Tab>
            <Tab className={styles.BikeCard__Nav__tab}>15 Days</Tab>
            <Tab className={styles.BikeCard__Nav__tab}>30 Days</Tab>
            <Tab className={styles.BikeCard__Nav__tab}>90 Days</Tab>
          </TabList>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <div className={styles.BikeCard__panel__sub}>
                <b>Mon-Thu</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Booking Time(0 - 12 hrs)</span>
                </div>
                <div>
                  <span>₹ {hourly_rate}/hr</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Booking Time({`>`} 12 hrs)</span>
                </div>
                <div>
                  <span>₹ {hourly_rate - 5}/hr</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Extras</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Kilometers Limit</span>
                </div>
                <div>
                  <span>{kilometer_limit}/hr</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Excess Kilometer Charges</span>
                </div>
                <div>
                  <span>₹ {kilometer_limit - 1}/km</span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <div className={styles.BikeCard__panel__sub}>
                <b>Rental Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Price for 7 days</span>
                </div>
                <div>
                  <span>₹ {hourly_rate * 7 * 24} </span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Km Limit</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>
                    No of kms in 7 days that can be travelled without extra
                    charges
                  </span>
                </div>
                <div>
                  <span>{kilometer_limit * 100} Km</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Excess Kilometer Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Excess Kilometer Charges</span>
                </div>
                <div>
                  <span>₹ {kilometer_limit - 2}/km</span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <div className={styles.BikeCard__panel__sub}>
                <b>Rental Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Price for 15 days</span>
                </div>
                <div>
                  <span>₹ {hourly_rate * 15 * 24} </span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Km Limit</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>
                    No of kms in 15 days that can be travelled without extra
                    charges
                  </span>
                </div>
                <div>
                  <span>{kilometer_limit * 150} Km</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Excess Kilometer Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Excess Kilometer Charges</span>
                </div>
                <div>
                  <span>₹ {kilometer_limit - 2}/km</span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <div className={styles.BikeCard__panel__sub}>
                <b>Rental Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Price for 30 days</span>
                </div>
                <div>
                  <span>₹ {hourly_rate * 17 * 24} </span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Km Limit</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>
                    No of kms in 30 days that can be travelled without extra
                    charges
                  </span>
                </div>
                <div>
                  <span>{kilometer_limit * 300} Km</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Excess Kilometer Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Excess Kilometer Charges</span>
                </div>
                <div>
                  <span>₹ {kilometer_limit - 3}/km</span>
                </div>
              </div>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <div className={styles.BikeCard__panel__sub}>
                <b>Rental Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Price for 90 days</span>
                </div>
                <div>
                  <span>₹ {hourly_rate * 40 * 24} </span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Km Limit</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>
                    No of kms in 90 days that can be travelled without extra
                    charges
                  </span>
                </div>
                <div>
                  <span>{kilometer_limit * 900} Km</span>
                </div>
              </div>
              <div className={styles.BikeCard__panel__sub}>
                <b>Excess Kilometer Charges</b>
              </div>
              <div className={styles.BikeCard__panel__flex}>
                <div>
                  <span>Excess Kilometer Charges</span>
                </div>
                <div>
                  <span>₹ {kilometer_limit - 4}/km</span>
                </div>
              </div>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <button onClick={bookNowHandler} className={styles.BikeCard__button}>
        Book Now
      </button>
    </div>
  );
}

export default BikeCard;
