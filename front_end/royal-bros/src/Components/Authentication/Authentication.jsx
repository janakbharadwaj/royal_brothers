import React from "react";
import styles from "./Authentication.module.css";
import Login from "./Login";
import Signup from "./Signup";

function Authentication() {
  const [current, setCurrent] = React.useState("login");

  const handleChange = (choice) => {
    setCurrent(choice);
  };

  return (
    <div className={styles.Authentication}>
      <h1>Rent . Ride . Explore</h1>
      <div className={styles.Authentication__main}>
        <div className={styles.Authentication__nav}>
          <div>
            <button
              style={{
                borderBottom:
                  current === "login"
                    ? "5px solid #FED250"
                    : " 5px solid white",
              }}
              onClick={() => handleChange("login")}
            >
              Login
            </button>
          </div>
          <div>
            <button
              style={{
                borderBottom:
                  current !== "login"
                    ? "5px solid  #FED250"
                    : " 5px solid white",
              }}
              onClick={() => handleChange("signup")}
            >
              Signup
            </button>
          </div>
        </div>
        {current === "login" ? <Login></Login> : <Signup></Signup>}
      </div>
    </div>
  );
}

export default Authentication;
