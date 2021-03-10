import React from "react";

import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";

import TextField from "@material-ui/core/TextField";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";

import styles from "./Authentication.module.css";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
  },
  margin: {},
  textField: {
    width: "25ch",
    margin: "10px auto",
    width: "100%",
  },
}));

const initState = {
  fName: "",
  lName: "",
  email: "",
  password: "",
};

function Signup() {
  const classes = useStyles();
  const [formData, setFormData] = React.useState(initState);

  const onChangeHandler = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();
    console.log(formData);
  };

  return (
    <form onSubmit={onSubmitHandler} className={styles.Authentication__form}>
      <div>
        <TextField
          className={classes.textField}
          type="text"
          label="First Name"
          variant="outlined"
          name="fName"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          type="text"
          label="Last Name"
          variant="outlined"
          name="lName"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          type="email"
          label="Email"
          variant="outlined"
          name="email"
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <TextField
          className={classes.textField}
          type="password"
          label="Password"
          variant="outlined"
          name="password"
          InputProps={{
            endAdornment: <Visibility></Visibility>,
          }}
          onChange={onChangeHandler}
        />
      </div>
      <div>
        <button className={styles.Authentication__button} type="submit">
          Sign up
        </button>
      </div>
    </form>
  );
}

export default Signup;
