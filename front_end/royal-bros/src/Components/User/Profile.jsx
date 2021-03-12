import React from "react";
import { useSelector, useDispatch } from "react-redux";

import styles from "./Profile.module.css";

function Profile() {
  const userData = useSelector((state) => state.authReducer.userData);
  const { first_name, last_name, email, createdAt } = userData;
  return (
    <div className={styles.Wrapper}>
      <div className={styles.Profile}>
        <div>
          <div>
            <img
              src="https://d36g7qg6pk2cm7.cloudfront.net/assets/profile-f17aa1dfbd0cb562142f1dcb10bb7ad33e1ac8417ad29a1cdab7dfbfbbfe2f15.png"
              alt="profile"
            ></img>
          </div>
          <div>
            <h3>{first_name + " " + last_name}</h3>
          </div>
          <div>
            <button>Available Credits 0</button>
          </div>
        </div>
        <div>
          <div>
            <label>First Name</label>
            <p>{first_name}</p>
          </div>
          <div>
            <label>Last Name</label>
            <p>{last_name}</p>
          </div>
          <div>
            <label>Email</label>
            <p>{email}</p>
          </div>
          <div>
            <label>Account Created on</label>
            <p>{createdAt.substring(0, 10)}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
