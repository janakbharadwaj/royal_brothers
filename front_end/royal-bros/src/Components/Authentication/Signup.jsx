import React from "react";
import { useDispatch, useSelector } from "react-redux";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import styles from "./Authentication.module.css";
import { signupHandler } from "../../Redux/Auth/Actions";
import { Snackbar } from "@material-ui/core";
import Alert from "@material-ui/lab/Alert";
import { useHistory } from "react-router";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {},
  textField: {
    margin: "10px auto",
    width: "100%",
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        borderColor: "grey",
      },
      "&.Mui-focused fieldset": {
        borderColor: "#FED250",
      },
    },
  },
}));

const initState = {
  first_name: "",
  last_name: "",
  email: "",
  password: "",
};

function Signup() {
  const classes = useStyles();
  const [formData, setFormData] = React.useState(initState);
  const dispatch = useDispatch();
  const message = useSelector((state) => state.authReducer.signupRes);
  const [passwordVisible, setPasswordVisible] = React.useState(false);
  const [snackBarOpen, setSnackBarOpen] = React.useState(false);

  const snackBarHandler = (input) => {
    if (input) {
      setSnackBarOpen(true);
    } else {
      setSnackBarOpen(false);
    }
  };

  const passwordVisibilityHandler = () => {
    setPasswordVisible((prev) => !prev);
  };

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(signupHandler(formData));
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.Authentication__form}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={snackBarOpen}
        onClose={() => snackBarHandler(false)}
        message={message}
      >
        <Alert
          onClose={() => snackBarHandler(false)}
          severity={message === "Success" ? "success" : "error"}
        >
          {message}
        </Alert>
      </Snackbar>
      <div>
        <TextField
          className={classes.textField}
          label="First Name"
          type="text"
          variant="outlined"
          name="first_name"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          type="text"
          label="Last Name"
          variant="outlined"
          name="last_name"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          label="Email"
          type="email"
          variant="outlined"
          name="email"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          label="Password"
          type={passwordVisible ? "text" : "password"}
          variant="outlined"
          name="password"
          InputProps={{
            endAdornment: passwordVisible ? (
              <VisibilityOff onClick={passwordVisibilityHandler} />
            ) : (
              <Visibility onClick={passwordVisibilityHandler} />
            ),
          }}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button
          onClick={() => snackBarHandler(true)}
          className={styles.Authentication__button}
          type="submit"
        >
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Signup;
