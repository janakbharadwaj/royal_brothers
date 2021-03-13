// import React from 'react'
// import styles from "./Bikes.module.css"
// const BikeItem = ({_id,bike_name,bike_image}) => {
//     return (
//         <div>
//             <div>
//                   <h4>{bike_name}</h4>
//                   <img src={bike_image} alt="bike" />
//                 </div>
//                 <div className={styles.bikeItems__availability}>
//                   <p>Available at</p>
//                   <select>
//                     {["hello1", "hello2"].map((tag) => (
//                       <option key={tag} value={tag}>
//                         {tag}
//                       </option>
//                     ))}
//                   </select>
//                 </div>
//                 <div className={styles.bikeItems__timings}>
//                   <div>
//                     <p>{pickUpTime}</p>
//                     <p>{pickUpDate}</p>
//                   </div>
//                   <div>to</div>
//                   <div>
//                     <p>{dropOffTime}</p>
//                     <p>{dropOffDate}</p>
//                   </div>
//                 </div>
//                 <div className={styles.bikeItem__booking}>
//                   <div>
//                     <p>
//                       {" "}
//                       &#x20b9; price
//                       <br />
//                       (km included)
//                     </p>
//                   </div>
//                   <div>
//                     <button onClick={handleBooking}>BOOK</button>
//                   </div>
//                 </div>
//               </div>

//         </div>
//     )
// }

// export default BikeItem
