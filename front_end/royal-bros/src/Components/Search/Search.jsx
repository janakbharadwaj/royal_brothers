import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Paper } from "@material-ui/core";
import styles from "./Search.module.css";
import { SelectionContext } from "../../Context/SelectionContextProvider";
const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: 450,
    margin: " 200px auto",
  },
}));

function Search({ modalOpen, setModalOpen }) {
  const classes = useStyles();
  const {
    onSubmitHandler,
    onChangeHandler,
    info,
    selectedBike,
  } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  return (
    <Modal
      className={classes.root}
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <Paper className={styles.Search}>
        <h1>Search your next ride</h1>
        <form onSubmit={onSubmitHandler}>
          <label>Pickup</label>
          <div className={styles.Search__element}>
            <div>
              <input
                onChange={onChangeHandler}
                value={pickupDate}
                name="pickupDate"
                type="date"
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
          <div className={styles.Search__element}>
            <label>Selected Bike</label>
          </div>
          <div className={styles.Search__element}>
            <img src={selectedBike.bike_image} alt="bikeImage"></img>
          </div>
          <div className={styles.Search__element}>
            <p>{selectedBike.bike_name}</p>
          </div>
          <div className={styles.Search__element}>
            <button type="submit">Search</button>
          </div>
        </form>
      </Paper>
    </Modal>
  );
}

export default Search;
