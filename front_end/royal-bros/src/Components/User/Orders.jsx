import React from "react";
import styles from "./Orders.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getRentalsHandler } from "../../Redux/User/actions";

function Orders() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authReducer.userData);
  const ordersData = useSelector((state) => state.userReducer.ordersData);

  React.useEffect(() => {
    dispatch(getRentalsHandler(userData._id));
  }, []);

  return (
    <div className={styles.Orders}>
      <h1>My Rids</h1>
      <p>{userData?.first_name}</p>
    </div>
  );
}

export default Orders;
