import React from "react";
import styles from "./Bikes.module.css";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import getBikes from "../../Redux/Bikes/action";
import BikesFiter from "./BikesFilter";
import { SelectionContext } from "../../Context/SelectionContextProvider";
import TimeConversion from "./utils"
import { tarrifReducer } from "../../Redux/Tarrif/TarrifReducer";
import BikeItem from "./BikeItem";
const Bikes = () => {
  const[sortData,setSortData]=React.useState([])
  const dispatch = useDispatch();
  const history = useHistory();
  const isLoading = useSelector((state) => state.bikes.isLoading);
  const isError = useSelector((state) => state.bikes.isError);
  const bikesData = useSelector((state) => state.bikes.bikesData);
  const { info,selectedBike,setInfo } = React.useContext(SelectionContext);
  const { pickupDate, pickupTime, dropDate, dropTime } = info;
  const relevantData=useSelector(state=>state.bikesFilter.relevantData)
  const currBikeLoc = useSelector((state) => state.tarrifReducer.currentLocation);
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
  const[actRele,setRele]=React.useState(true)

   const highToLow=()=>{
    let newList = bikesData.sort((a,b) => (a.hourly_rate > b.hourly_rate) ? -1 : 
    ((b.hourly_rate > a.hourly_rate) ? 1 : 0))
    setSortData([...newList])
   }
   const lowToHigh=()=>{
    let newList = bikesData.sort((a,b) => (a.hourly_rate > b.hourly_rate) ? 1 : 
    ((b.hourly_rate > a.hourly_rate) ? -1 : 0))
    setSortData([...newList])
   }
  const relevancefunc=()=>{
    setSortData([])
    
  }

  return (
    <>
    <div className={styles.upper__cont}>
     <button onClick={relevancefunc}>Relevance</button>
      <button onClick={highToLow} >Price-High to Low</button>
      <button onClick={lowToHigh}>Price-Low to High</button>
    </div>
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
                <BikeItem {...bike} pickUpDate={pickUpDate} pickUpTime={pickUpTime} dropOffDate={dropOffDate} dropOffTime={dropOffTime} handleBooking={handleBooking}/>
            )}
            {selectedBike.bike_name?
            
            <BikeItem {...selectedBike} pickUpDate={pickUpDate} pickUpTime={pickUpTime} dropOffDate={dropOffDate} dropOffTime={dropOffTime} handleBooking={handleBooking}/>
            :" "}



        </div>
       
        <div className={styles.main__cont__bikesdata__Items}>
          {isError ? (
            <div>something went wrong</div>
          ) : isLoading ? (
            <div>....loading</div>
          ) :sortData.length==0?(
            bikesData.map((bike) => (
             
              <BikeItem {...bike} pickUpDate={pickUpDate} pickUpTime={pickUpTime} dropOffDate={dropOffDate} dropOffTime={dropOffTime} handleBooking={handleBooking}/>
            ))
          ):(
            sortData.map((bike)=>
            <BikeItem {...bike} pickUpDate={pickUpDate} pickUpTime={pickUpTime} dropOffDate={dropOffDate} dropOffTime={dropOffTime} handleBooking={handleBooking}></BikeItem>)
          )}
        </div>
      </div>
    </div>
    </>
  );
};


export default Bikes;
