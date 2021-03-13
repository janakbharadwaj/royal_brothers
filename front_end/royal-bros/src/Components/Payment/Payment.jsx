import React from "react";
import StripeCheckout from "react-stripe-checkout";
import { makeStyles } from "@material-ui/core/styles";
import { Modal, Paper } from "@material-ui/core";
import styles from "./Payment.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "absolute",
    width: 450,
    margin: "5vh auto",
  },
}));

function Payment({ modalOpen, setModalOpen, payload }) {
  const classes = useStyles();

  const { bike_name, bike_image, hourly_rate, info, kilometer_limit } = payload;
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  const [product] = React.useState({
    name: "Tesla Roadster",
    price: 100,
    description: "Car",
  });

  function handleToken(token) {
    console.log(token);
    console.log("gg");
  }

  return (
    <Modal
      className={classes.root}
      open={modalOpen}
      onClose={() => setModalOpen(false)}
    >
      <Paper>
        <div>
          <div>
            <h1>{bike_name}</h1>
          </div>
          <div>
            <img src={bike_image} alt="bike"></img>
          </div>
          <div>
            <div>
              <label>Pickup</label>
              <h2>{pickupDate}</h2>
              <h2>{pickupTime}</h2>
            </div>
            <div>
              <label>Drop</label>
              <h2>{dropDate}</h2>
              <h2>{dropTime}</h2>
            </div>
          </div>
          <StripeCheckout
            stripeKey="pk_test_51GuhVYJILFs8StGHjjzZha1VPsLlSzlDyahYHZksGhiDQZ94VIOGLzLOOsZoGwkm9nKgMM3qnVMg8ycODAV2FbWq00z0RR74IN"
            token={handleToken}
            amount={product.price * 100}
            name={product.name}
            currency="INR"
          ></StripeCheckout>
        </div>
      </Paper>
    </Modal>
  );
}

export default Payment;
