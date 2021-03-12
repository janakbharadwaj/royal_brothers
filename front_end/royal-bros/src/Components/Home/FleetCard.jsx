import React from "react";
import { Link } from "react-router-dom";
import styles from "./Home.module.css";

function FleetCard({ bike_name, bike_image, hourly_rate }) {
  return (
    <div className={styles.Fleet__solo__card}>
      <p>{bike_name}</p>
      <img src={bike_image} alt={bike_name}></img>
      <hr></hr>
      <h2>₹{hourly_rate}/hour</h2>
      <Link to="/tarrif">
        <button>Book Now</button>
      </Link>
    </div>
  );
}

export default FleetCard;
