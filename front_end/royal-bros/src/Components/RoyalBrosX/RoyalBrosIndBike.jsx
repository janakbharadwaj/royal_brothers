import React from 'react'
//import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios'
import styles from './indBike.module.css'

const RoyalBrosIndBike = () => {
    const[month,setMonth] = React.useState(0)
    const[rate,setRate] = React.useState('')
    const[deposit,setDeposit] = React.useState(0)
    const [indBike,setIndBike] = React.useState([])
    const { id } = useParams();
    const[date,setDate]=React.useState('')
    const[time,setTime]=React.useState('')
    const[discount,setDiscount] = React.useState(0)
    const[total,setTotal] = React.useState(0)

    React.useEffect(()=>{
        let abc = localStorage.getItem("dateTime")
        let dateTime = JSON.parse(abc)
        //console.log(dateTime)
        setDate(dateTime.date)
        setTime(dateTime.time)
    },[])
    
    React.useEffect(()=>{
        axios.get(`http://localhost:8080/bikes/${id}`)
        .then((res)=>setIndBike(res.data.data))
    },[])
    
    const validateRate=()=>{
        let mnth = Number(month)
        //console.log(typeof mnth)
        let rateFull = mnth*(indBike.hourly_rate)*24*30
        setRate(rateFull)
        if(mnth>2){
            let deposit = rateFull/2;
            setDeposit(deposit)
        }else{
            setDeposit(1400)
        }

        if(mnth<=2){
            setDiscount(5)
        }
        if(mnth>2 && mnth<=6){
            setDiscount(10)
        }
        if(mnth>6){
            setDiscount(15)
        }
    }

    let disc = rate*discount/100
    console.log(rate-disc)

    return (
        <div className={styles.indBikeParentDiv}>
            <div className={styles.bikeDetails}>
                <img src={indBike.bike_image} alt=''/>
                <h2>{indBike.bike_name}</h2>
                <h3>Km Limit : {indBike.kilometer_limit} km/month</h3>
                <h3>Hourly rate : <i class="fas fa-rupee-sign"> </i> {indBike.hourly_rate} rupees/km</h3>
            </div>
            <div className={styles.subsDetails}>
                <h2>Subscription Details</h2>
                <h3>Start from <h4 style={{color:"rgb(254,210,80)",fontWeight:"bold"}}> <i class="fas fa-table"> </i> :- {date}  <span> <i class="fas fa-grip-lines-vertical"> </i> </span> <i class="far fa-clock"> </i> :- {time} </h4></h3>
                <br/>
                <label for='mnth'>Enter no of Months</label><br/>
                <input type='' id='mnth' onChange={(e)=>setMonth(e.target.value)} value={month}/><br/>
                <button onClick={validateRate}>validate</button><br/>
                <div className={styles.ratesDiv}>
                    <p>Rent per Month : <span>{(indBike.hourly_rate)*24*30} <i class="fas fa-rupee-sign"> </i> </span></p>
                    <p>Rent for choosen months: {rate?<span>{rate} <i class="fas fa-rupee-sign"> </i> </span>:<span>0</span>}</p>
                    <p>Mandatory Deposit : <span>{deposit} <i class="fas fa-rupee-sign"> </i> </span></p>
                    <p>Discount : <span>{discount}%</span></p>
                    <h3>Total : <span>{rate - disc} <i class="fas fa-rupee-sign"> </i> </span></h3>
                </div>
            </div>
        </div>
    )
}

export {RoyalBrosIndBike}