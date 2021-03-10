import React from "react";
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
function Search() {
  const classes = useStyles();

  return (
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
  );
}

export default Search;
