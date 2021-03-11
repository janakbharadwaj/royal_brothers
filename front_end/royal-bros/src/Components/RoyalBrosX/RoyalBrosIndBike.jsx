import React from 'react'
//import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios'

const RoyalBrosIndBike = () => {
    const[month,setMonth] = React.useState(0)
    const[rate,setRate] = React.useState('')
    const[deposit,setDeposit] = React.useState(0)
    const [indBike,setIndBike] = React.useState([])
    const { id } = useParams();
    
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
    }

    return (
        <div>
            <div>
                <img src={indBike.bike_image} alt=''/>
                <h2>{indBike.bike_name}</h2>
                <p>Km Limit {indBike.kilometer_limit}</p>
                <p>Hourly rate {indBike.hourly_rate}</p>
            </div>
            <div>
                <h2>subscription details</h2>
                <input type='number' onChange={(e)=>setMonth(e.target.value)} value={month}/>
                <button onClick={validateRate}>validate</button>
                <h2>{`rate for ${month}months is ${rate}`}</h2>
                <h2>deposit {deposit}</h2>
            </div>
        </div>
    )
}

export {RoyalBrosIndBike}