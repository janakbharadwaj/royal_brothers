import React from 'react'
import styles from "./BikesFilter.module.css"
import TimeConversion from "./utils"

 const BikesFilter = ({pickUpDate,pickUpTime,dropOffDate,dropOffTime,handleUpdateDateTiming}) => {
   
    return (
        <div>
            <p>select date and time</p>
                
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
                  <p>Search Duration</p>
                  <p>{(pickUpDate&&dropOffDate)&&TimeConversion(pickUpDate,dropOffDate)}</p>
                  <p>Search By location</p>
                  <select>
                    {["IndiraNagar","koramangala"].map((city,index)=>
                    <option key={index} value={city}>{city}</option>)}
                  </select>

                </div>
                
        </div>
    )
}
export default BikesFilter