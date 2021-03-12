import React from 'react'
import styles from "./BikesFilter.module.css"
import TimeConversion from "./utils"
import axios from "axios"
import getBikesFilters  from  "../../Redux/BikesFilter/action"
import {useSelector,useDispatch} from "react-redux"
 const BikesFilter = ({pickUpDate,pickUpTime,dropOffDate,dropOffTime,handleUpdateDateTiming}) => {
     const[bikeState,setBikeState]=React.useState({})
     const dispatch = useDispatch()
     const relevantData=useSelector(state=>state.bikesFilter.relevantData)
  const handleChange=(e)=>{
      const{name,checked}=e.target
      setBikeState({...bikeState,[name]:checked})

  }
  const handleSubmit=(e)=>{
    e.preventDefault()
    const arr=[]
    console.log(bikeState)

    Object.entries(bikeState).map(([key,value])=>{
        console.log(key,value)
        if(value)
        {
            arr.push(key)
        }
    })

    dispatch(getBikesFilters(arr))
    console.log(relevantData)
   
  }
   const bikeData=useSelector(state=>state.bikes.bikesData)
    return (
        <div className={styles.text__part}>
            <p style={{fontWeight:"bolder"}}>select date and time</p>
                
                <div className={styles.date__time}>
                    <label>
                        pickup Date<br/>
                        <input type="date"
                        name="pickUpDate"
                         placeholder="pickup date"
                         value={pickUpDate}
                         onChange={handleUpdateDateTiming}/>
                    </label>
                    <label>
                        Time<br/>
                        <input type="time"
                        name="pickUpTime"
                         placeholder="pickupdate"
                         value={pickUpTime}
                         onChange={handleUpdateDateTiming}/>
                    </label>
                </div>
                <div className={styles.date__time}>
                    <label>
                        DropOff Date<br/>
                        <input type="date"
                        name="dropOffDate"
                         placeholder="pickup date"
                         value={dropOffDate}
                         onChange={handleUpdateDateTiming}/>
                    </label>
                    <label>
                        Time<br/>
                        <input type="time"
                        name="dropOffTime"
                         placeholder="pickup date"
                         value={dropOffTime}
                         onChange={handleUpdateDateTiming}/>
                    </label>
                </div>
                <div>
                  <p style={{fontWeight:"bolder"}}>Search Duration</p>
                  {(pickUpDate && dropOffDate)  &&  TimeConversion(pickUpDate,dropOffDate) } days
                  {/* <p style={{fontWeight:"bolder"}}>Search By location</p>
                  <select>
                    {["IndiraNagar","koramangala"].map((city,index)=>
                    <option key={index} value={city}>{city}</option>)}
                  </select> */}

                </div>
                <br/>
                <p style={{fontWeight:"bolder"}}>Search By Bike model</p>
                <div className={styles.bikes__filter__page}>
                 <form onSubmit={handleSubmit}>
                        {bikeData?.map((bike)=>
                        <>
                        <br/>
                        <label key={bike._id}>
                           
                            <input
                            type="checkbox"
                             name={`${bike.bike_name}`}
                            value={bikeState || false}
                            onChange={handleChange}
                           
                             />
                              {bike.bike_name}
                        </label>
                        </>)}
                        <br/>
                        <input className={styles.apply_filter_btn} type="submit" value="APPLY FILTERS"/>
                 </form>
                 
                    
                </div>
                
        </div>
    )
}
export default BikesFilter