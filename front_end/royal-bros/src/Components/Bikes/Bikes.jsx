import React from "react";
import styles from "./Bikes.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getBikes from "../../Redux/Bikes/action";
import BikesFiter from "./BikesFilter";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import TimeConversion from "./utils"
const Bikes = () => {
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.bikes.isLoading);
  const isError = useSelector((state) => state.bikes.isError);
  const bikesData = useSelector((state) => state.bikes.bikesData);
  const { info,selectedBike,setInfo } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  const relevantData=useSelector(state=>state.bikesFilter.relevantData)
  const currBikeLoc = useSelector((state) => state.tarrifReducer.currentLocation);
  
  console.log(currBikeLoc._id)
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
    dispatch(getBikes(`${currBikeLoc._id}`));
  };
  React.useEffect(() => {
    handleGet();
  }, [currBikeLoc._id]);
  const handleBooking = (id) => {
    setInfo({...info,pickupDate:pickUpDate,pickupTime:pickUpTime,dropDate:dropOffDate,dropTime:dropOffTime})
    history.push(`/bikes/payment/${id}`);
  };
   const { pickUpDate, pickUpTime, dropOffDate, dropOffTime } = dateTimings;
  
  return (
    <div className={styles.main__cont}>
      <div className={styles.main__cont__filters}>
        <h2>FILTERS</h2>
        <div>
          <BikesFiter
            {...dateTimings}
            handleUpdateDateTiming={handleUpdateDateTiming}
          />
        </div>
      </div>

      <div className={styles.main__cont__bikesdata}>
        <div className={styles.main__cont__bikesdata__Items}>
            {relevantData?.map((bike)=>
                                <div key={bike._id}>
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
                                     
                                        &#x20b9; {(pickUpDate && dropOffDate)  && Number(TimeConversion(pickUpDate,dropOffDate))*24*bike.hourly_rate}
                                        <br />
                                        ( km included)
                                      </p>
                                    </div>
                                    <div>
                                      <button onClick={()=>handleBooking(bike._id)}>BOOK</button>
                                    </div>
                                  </div>
                              </div>
            
            )}
            {selectedBike.bike_name?
            <div key={selectedBike._id}>
                                  <div>
                                    <h4>{selectedBike.bike_name}</h4>
                                    <img src={selectedBike.bike_image} alt="bike" />
                                  </div>
                                  <div className={styles.bikeItems__availability}>
                                    <p>Available at</p>
                                    <select>
                                      {["IndiraNagar", "koramangala"].map((tag) => (
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
                                     
                                        &#x20b9; {(pickUpDate && dropOffDate)  && Number(TimeConversion(pickUpDate,dropOffDate))*24*selectedBike.hourly_rate}
                                        <br />
                                        ( km included)
                                      </p>
                                    </div>
                                    <div>
                                      <button onClick={()=>handleBooking(selectedBike._id)}>BOOK</button>
                                    </div>
                                  </div>
                              </div>
                          :" "}



        </div>
        <hr/>
        <div className={styles.main__cont__bikesdata__Items}>
          {isError ? (
            <div>something went wrong</div>
          ) : isLoading ? (
            <div>....loading</div>
          ) : (
            bikesData.map((bike) => (
              <div key={bike._id}>
                <div>
                  <h4>{bike.bike_name}</h4>
                  <img src={bike.bike_image} alt="bike" />
                </div>
                <div className={styles.bikeItems__availability}>
                  <p>Available at</p>
                  <select>
                    {["IndiraNagar", "koramangala"].map((tag) => (
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
          
                      &#x20b9;{(pickUpDate && dropOffDate)  && Number(TimeConversion(pickUpDate,dropOffDate))*24*bike.hourly_rate}
                      <br />
                      ( km included)
                    </p>
                  </div>
                  <div>
                    <button onClick={()=>handleBooking(bike._id)}>BOOK</button>
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
