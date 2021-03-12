import React from "react";
import styles from "./Orders.module.css";
import { useSelector, useDispatch } from "react-redux";
import { getMonthlyHandler, getRentalsHandler } from "../../Redux/User/actions";
import HistoryCard from "./HistoryCard";
import HistoryCardMonth from "./HistoryCardMonth";

function Orders() {
  const dispatch = useDispatch();
  const userData = useSelector((state) => state.authReducer.userData);
  const dailyRentals = useSelector((state) => state.userReducer.ordersData);
  const monthlyRentals = useSelector((state) => state.userReducer.monthsData);

  React.useEffect(() => {
    dispatch(getRentalsHandler(userData._id));
    dispatch(getMonthlyHandler(userData._id));
  }, []);

  return (
    <div className={styles.Orders}>
      <h1>My Rides</h1>
      {dailyRentals.length === 0 && monthlyRentals.length === 0 ? (
        <div>
          <h1>Oops!! you have not booked any rides</h1>
        </div>
      ) : (
        <>
          <h1>Rentals</h1>
          <div className={styles.Orders__list}>
            {dailyRentals?.map((item, index) => (
              <HistoryCard {...item} index={index} />
            ))}
          </div>
          <h1>Monthly</h1>
          <div className={styles.Orders__list}>
            {monthlyRentals?.map((item, index) => (
              <HistoryCardMonth {...item} index={index} />
            ))}
          </div>
        </>
      )}
    </div>
  );
}

export default Orders;
