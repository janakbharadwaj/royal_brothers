import React, { useState, useContext } from "react";
import BikeCard from "./BikeCard";
import { useSelector, useDispatch } from "react-redux";
import { getBikesHandler } from "../../Redux/Tarrif/Actions";
import { SelectionContext } from "../../Context/SelectionContextProvider";

import styles from "./Tarrif.module.css";
import Search from "../Search/Search";

function Tarrif() {
  const allBikes = useSelector((state) => state.tarrifReducer.data);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);
  const { selectedBikeHandler } = useContext(SelectionContext);

  const bookNowHandler = (payload) => {
    setModalOpen(true);
    selectedBikeHandler(payload);
  };

  React.useEffect(() => {
    dispatch(getBikesHandler());
  }, []);

  return (
    <div className={styles.Tarrif}>
      <Search modalOpen={modalOpen} setModalOpen={setModalOpen}></Search>
      <h1>Bike rental tariffs in Bangalore</h1>
      <div className={styles.Tarrif__bikes}>
        {allBikes?.map((item) => (
          <BikeCard
            bookNowHandler={bookNowHandler}
            key={item._id}
            {...item}
          ></BikeCard>
        ))}
      </div>
    </div>
  );
}

export default Tarrif;
