import React from "react";
import { Link } from "react-router-dom";
import styles from "./ProfileDropdown.module.css";

function ProfileDropdown({ logoutClickHandler }) {
  return (
    <div className={styles.ProfileDropdown}>
      <div>
        <Link to="/orders">
          <i class="fas fa-biking"></i>
          My Rides
        </Link>
      </div>
      <hr></hr>
      <div>
        <Link to="/users">
          <i class="fas fa-user"></i>
          My Profile
        </Link>
      </div>
      <hr></hr>
      <div onClick={logoutClickHandler}>
        <Link to="/">
          <i class="fas fa-sign-out-alt"></i>
          Logout
        </Link>
      </div>
    </div>
  );
}

export default ProfileDropdown;
