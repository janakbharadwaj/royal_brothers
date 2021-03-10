import React from "react";
import styles from "./Bikes.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getBikes from "../../Redux/Bikes/action";
import BikesFiter from "./BikesFilter";
import { SelectionContext } from "../../Context/SelectionContextProvider";
const Bikes = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.bikes.isLoading);
  const isError = useSelector((state) => state.bikes.isError);
  const bikesData = useSelector((state) => state.bikes.bikesData);
  const { info } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  const [dateTimings, setDateTimings] = React.useState({
    pickUpDate: pickupDate,
    pickUpTime: pickupTime,
    dropOffDate: dropDate,
    dropOffTime: dropTime,
  });
  const handleUpdateDateTiming = (e) => {
    const { name, value } = e.target;
    setDateTimings({ ...dateTimings, [name]: value });
  };

  const handleGet = () => {
    dispatch(getBikes());
  };
  React.useEffect(() => {
    handleGet();
  }, []);
  const handleBooking = () => {
    history.push("");
  };
  const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = dateTimings;
  return (
    <div className={styles.main__cont}>
      <div className={styles.main__cont__filters}>
        <p>FILTERS</p>
        <div>
          <BikesFiter
            {...dateTimings}
            handleUpdateDateTiming={handleUpdateDateTiming}
          />
        </div>
      </div>

      <div className={styles.main__cont__bikesdata}>
        <div></div>
        <div className={styles.main__cont__bikesdata__Items}>
          {isError ? (
            <div>something went wrong</div>
          ) : isLoading ? (
            <div>....loading</div>
          ) : (
            bikesData.map((bike) => (
              <div key={bike.id}>
                <div>
                  <h4>{bike.bike_name}</h4>
                  <img src={bike.bike_image} alt="bike" />
                </div>
                <div className={styles.bikeItems__availability}>
                  <p>Available at</p>
                  <select>
                    {["hello1", "hello2"].map((tag) => (
                      <option key={tag} value={tag}>
                        {tag}
                      </option>
                    ))}
                  </select>
                </div>
                <div className={styles.bikeItems__timings}>
                  <div>
                    <p>{pickUpTime}</p>
                    <p>{pickUpDate}</p>
                  </div>
                  <div>to</div>
                  <div>
                    <p>{dropOffTime}</p>
                    <p>{dropOffDate}</p>
                  </div>
                </div>
                <div className={styles.bikeItem__booking}>
                  <div>
                    <p>
                      {" "}
                      &#x20b9; price
                      <br />
                      (km included)
                    </p>
                  </div>
                  <div>
                    <button onClick={handleBooking}>BOOK</button>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Bikes;
