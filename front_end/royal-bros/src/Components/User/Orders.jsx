import React from "react";
import styles from "./Orders.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getRentalsHandler } from "../../Redux/User/actions";
import HistoryCard from "./HistoryCard";

function Orders() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authReducer.userData);
  const ordersData = useSelector((state) => state.userReducer.ordersData);

  React.useEffect(() => {
    dispatch(getRentalsHandler(userData._id));
  }, []);

  return (
    <div className={styles.Orders}>
      <h1>My Rides</h1>
      <div className={styles.Orders__list}>
        {ordersData?.map((item) => (
          <HistoryCard {...item} />
        ))}
      </div>
    </div>
  );
}

export default Orders;
