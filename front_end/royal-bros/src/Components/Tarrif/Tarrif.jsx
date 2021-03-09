import React, { useState } from "react";
import BikeCard from "./BikeCard";
import { useSelector, useDispatch } from "react-redux";
import { getBikesHandler } from "../../Redux/Tarrif/Actions";

import styles from "./Tarrif.module.css";

function Tarrif() {
  const allBikes = useSelector((state) => state.tarrifReducer.data);
  const dispatch = useDispatch();
  const [currentTab, setCurrentTab] = useState([]);

  React.useEffect(() => {
    dispatch(getBikesHandler());
  }, []);

  console.log(allBikes, "from tarrif");

  return (
    <div className={styles.Tarrif}>
      <h1>Bike rental tariffs in Bangalore</h1>
      <div className={styles.Tarrif__bikes}>
        {allBikes?.map((item) => (
          <BikeCard key={item._id} {...item}></BikeCard>
        ))}
      </div>
    </div>
  );
}

export default Tarrif;
