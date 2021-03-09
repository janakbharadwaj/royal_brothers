import React from "react";

import styles from "./Tarrif.module.css";
import { Tab, Tabs, TabList, TabPanel } from "react-tabs";
import "react-tabs/style/react-tabs.css";

function BikeCard({ bike_name, bike_image, hourly_rate, kilometer_limit }) {
  return (
    <div className={styles.BikeCard}>
      <h2>{bike_name}</h2>
      <div>
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
              <b>Mon-Thu</b>
              <div>
                <div>
                  <span>Booking Time(0 - 12 hrs)</span>
                </div>
                <div>
                  <span>₹ {hourly_rate}/hr</span>
                </div>
              </div>
              <div>
                <div>
                  <span>Booking Time({`>`} 12 hrs)</span>
                </div>
                <div>
                  <span>₹ {hourly_rate - 5}/hr</span>
                </div>
              </div>
              <b>Extras</b>
              <div>
                <div>
                  <span>Kilometers Limit</span>
                </div>
                <div>
                  <span> {kilometer_limit}/hr</span>
                </div>
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
              <h2>Any content 2</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <h2>Any content 3</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <h2>Any content 4</h2>
            </div>
          </TabPanel>
          <TabPanel>
            <div className={styles.BikeCard__panel}>
              <h2>Any content 5</h2>
            </div>
          </TabPanel>
        </div>
      </Tabs>
      <button className={styles.BikeCard__button}>Book Now</button>
    </div>
  );
}

export default BikeCard;
{
  /* <div>
<b>Mon-Thu</b>
</div>
<div>
<span>(Min 4 hrs booking)</span>
<ul>
  <li>
    <div>
      <p>Booking Time (0-12 hrs)</p>
    </div>
    <div>
      <p>₹ 20/hr</p>
    </div>
  </li>
  <li>
    <div>
      <p>Booking Time ({`>`}12 hrs)</p>
    </div>
    <div>
      <p>₹ 17/hr</p>
    </div>
  </li>
</ul>
</div> */
}
