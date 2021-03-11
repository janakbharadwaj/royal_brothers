import React from "react";
import styles from "./LocationModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { chooseLocationHandler } from "../../Redux/Tarrif/Actions";

function Card({ _id, location_name, location_image }) {
  const dispatch = useDispatch();

  return (
    <div
      onClick={() => dispatch(chooseLocationHandler(_id))}
      className={styles.Card}
    >
      <img src={location_image} alt="location"></img>
      <p>{location_name}</p>
    </div>
  );
}

export default Card;
