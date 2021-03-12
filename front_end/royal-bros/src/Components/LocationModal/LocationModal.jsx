import React from "react";
import { Modal, Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./LocationModal.module.css";
import { useDispatch, useSelector } from "react-redux";
import { getLocationHandler } from "../../Redux/Tarrif/Actions";
import Card from "./Card";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    margin: "5vh auto",
  },
  paper: {
    width: "100%",
    maxWidth: "900px",
    margin: "0px auto",
    minHeight: "600px",
  },
}));

function LocationModal({ modalOpen, setModalOpen }) {
  const dispatch = useDispatch();
  const [search, setSearch] = React.useState("");
  const allLocations = useSelector((state) => state.tarrifReducer.allLocations);
  const classes = useStyles();
  console.log(allLocations);

  React.useEffect(() => {
    dispatch(getLocationHandler(search));
  }, [search]);

  return (
    <Modal
      className={classes.root}
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <Paper className={styles.Paper}>
        <div className={styles.LocationModal}>
          <div className={styles.LocationModal__header}>
            <img
              src="data:image/png;base64,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"
              alt="logo"
            ></img>
          </div>
          <div className={styles.LocationModal__search}>
            <i className="fas fa-search"></i>
            <input
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search or type city to select"
            ></input>
          </div>
          <div className={styles.LocationModal__cards}>
            {allLocations?.map((item) => (
              <Card key={item._id} {...item}></Card>
            ))}
          </div>
        </div>
      </Paper>
    </Modal>
  );
}

export default LocationModal;
