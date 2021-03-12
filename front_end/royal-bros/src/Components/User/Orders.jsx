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
      {ordersData.length === 0 ? (
        <div>
          <h1>Oops!! you have not booked any rides</h1>
        </div>
      ) : (
        <div className={styles.Orders__list}>
          {ordersData?.map((item, index) => (
            <HistoryCard {...item} index={index} />
          ))}
        </div>
      )}
    </div>
  );
}

export default Orders;
