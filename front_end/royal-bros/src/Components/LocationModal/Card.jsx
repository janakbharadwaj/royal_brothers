import React from "react";
import styles from "./LocationModal.module.css";
import { useDispatch } from "react-redux";
import { chooseLocationHandler } from "../../Redux/Tarrif/Actions";

function Card({ _id, location_name, location_image, setModalOpen }) {
  const dispatch = useDispatch();

  const choosingLocation = () => {
    dispatch(chooseLocationHandler(_id));
    setModalOpen(false);
  };

  return (
    <div onClick={choosingLocation} className={styles.Card}>
      <img src={location_image} alt="location"></img>
      <p>{location_name}</p>
    </div>
  );
}

export default Card;
