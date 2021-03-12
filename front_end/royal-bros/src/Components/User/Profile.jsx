import React from "react";
import { useSelector, useDispatch } from "react-redux";
import styles from "./Profile.module.css";

function Profile() {
  const userData = useSelector((state) => state.authReducer.userData);
  const { first_name, last_name, email, createdAt } = userData;
  return (
    <div className={styles.Profile}>
      <h1>Profile</h1>
      <p>First Name : {first_name}</p>
      <p>Last Name : {last_name}</p>
      <p>Email : {email}</p>
      <p>Created On :{createdAt.substring(0, 10)}</p>
    </div>
  );
}

export default Profile;
