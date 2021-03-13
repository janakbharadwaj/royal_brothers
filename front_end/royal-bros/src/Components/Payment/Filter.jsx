import React from "react";
import styles from "./Filter.module.css";
import { SelectionContext } from "../../Context/SelectionContextProvider";

function Filter() {
  const { onSubmitHandler, onChangeHandler, info } = React.useContext(
    SelectionContext
  );
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  return (
    <div className={styles.Filter}>
      <div>
        <div className={styles.Search}>
          <h2>Search your next ride</h2>
          <form onSubmit={onSubmitHandler}>
            <label>Pickup</label>
            <div className={styles.Search__element}>
              <div>
                <input
                  onChange={onChangeHandler}
                  value={pickupDate}
                  name="pickupDate"
                  type="date"
                  min={new Date().toISOString().split("T")[0]}
                ></input>
              </div>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="pickupTime"
                  value={pickupTime}
                  type="time"
                ></input>
              </div>
            </div>
            <label>DropOff</label>
            <div className={styles.Search__element}>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="dropDate"
                  value={dropDate}
                  type="date"
                  min={pickupDate}
                ></input>
              </div>
              <div>
                <input
                  onChange={onChangeHandler}
                  name="dropTime"
                  value={dropTime}
                  type="time"
                ></input>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Filter;
