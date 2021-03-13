import React from "react";
import Filter from "./Filter";
import styles from "./SearchFilter.module.css";
import { useSelector } from "react-redux";
import BikeCard from "./BikeCard";
import axios from "axios";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import moment from "moment";
import { getTimeString } from "./util";

function SearchFilter() {
  const allBikes = useSelector((state) => state.tarrifReducer.allBikes);
  const [checkBox, setCheckBox] = React.useState({});
  const [filteredBikes, setFilteredBikes] = React.useState([]);
  const { info, selectedBike } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  let array = React.useRef();
  array = [];

  const onChangeHandler = (e) => {
    const { name, checked } = e.target;

    setCheckBox({ ...checkBox, [name]: checked });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    for (let k in checkBox) {
      if (checkBox[k]) {
        array.push(k);
      }
    }
    const payload = {
      arr: array,
    };
    axios
      .post("http://localhost:8080/bikes/filter/gg", payload)
      .then((res) => setFilteredBikes(res.data.data))
      .catch((err) => console.log(err));
  };
  return (
    <div className={styles.SearchFilter}>
      <div className={styles.SearchFilter__filter}>
        <div>
          <h1>Filters</h1>
        </div>
        <Filter></Filter>
        <div>
          <h2>Total Duration in Hours</h2>
          <p>{moment(dropDate).diff(pickupDate, "hours") || "Enter Date"}</p>
        </div>
        <div>
          <form onSubmit={onSubmitHandler}>
            <h2>Select a bike</h2>
            {allBikes?.map((item) => (
              <div className={styles.checkBox}>
                <input
                  onChange={onChangeHandler}
                  type="checkbox"
                  name={item._id}
                  value={checkBox.name}
                ></input>
                <label>{item.bike_name}</label>
              </div>
            ))}
            <div className={styles.Search__element}>
              <button type="submit">Apply Filter</button>
            </div>
          </form>
        </div>
      </div>
      <div>
        {selectedBike?._id !== "" && (
          <>
            <div className={styles.SearchFilter__bikes}>
              <BikeCard
                info={info}
                key={selectedBike._id}
                {...selectedBike}
              ></BikeCard>
            </div>
            <hr></hr>
          </>
        )}

        <div className={styles.SearchFilter__bikes}>
          {filteredBikes?.length === 0
            ? allBikes?.map((item) => (
                <BikeCard info={info} key={item._id} {...item} />
              ))
            : filteredBikes?.map((item) => (
                <BikeCard info={info} key={item._id} {...item} />
              ))}
        </div>
      </div>
    </div>
  );
}

export default SearchFilter;
