import React, { useState } from "react";
import BikeCard from "./BikeCard";
import { useSelector, useDispatch } from "react-redux";
import { getBikesHandler } from "../../Redux/Tarrif/Actions";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./Tarrif.module.css";
import { Modal, Paper } from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: 400,
    margin: " 200px auto",
  },
  paper: {},
}));

function Tarrif() {
  const allBikes = useSelector((state) => state.tarrifReducer.data);
  const dispatch = useDispatch();
  const [modalOpen, setModalOpen] = useState(false);

  const bookNowHandler = () => {
    setModalOpen(true);
  };

  React.useEffect(() => {
    dispatch(getBikesHandler());
  }, []);

  const classes = useStyles();
  return (
    <div className={styles.Tarrif}>
      <Modal
        className={classes.root}
        open={modalOpen}
        onClose={() => setModalOpen(false)}
        aria-labelledby="simple-modal-title"
        aria-describedby="simple-modal-description"
      >
        <Paper>
          <h1>Search your next ride</h1>
          <label>Pickup</label>
          <div>
            <div>
              <input type="date"></input>
            </div>
            <div>
              <input type="time"></input>
            </div>
          </div>
          <label>DropOff</label>
          <div>
            <div>
              <input type="date"></input>
            </div>
            <div>
              <input type="time"></input>
            </div>
          </div>
        </Paper>
      </Modal>
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
