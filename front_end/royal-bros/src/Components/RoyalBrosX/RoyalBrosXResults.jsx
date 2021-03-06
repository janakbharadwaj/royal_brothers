import axios from 'axios'
import React from 'react'
import styles from './RoyalBrosXResults.module.css'
import {Link} from 'react-router-dom'
//import { RoyalBrosXBikeModal } from './RoyalBrosXBikeModal'

const RoyalBrosXResults = () => {
    const [data,setData] = React.useState([])
    const[date,setDate]=React.useState('')
    const[time,setTime]=React.useState('')

    React.useEffect(()=>{
        let abc = localStorage.getItem("dateTime")
        let dateTime = JSON.parse(abc)
        //console.log(dateTime)
        setDate(dateTime.date)
        setTime(dateTime.time)
    },[])
    //console.log(date,time)

    function getBikes(){
        axios.get("http://localhost:8080/bikes")
        .then((res)=>setData(res.data.data))
    }

    React.useEffect(()=>{
        getBikes()
    },[])

    const getPopular=()=>{
        let newList = data.sort((a,b) => (a._id > b._id) ? 1 : 
        ((b._id > a._id) ? -1 : 0))
        setData([...newList])
    }

    const getPriceLowToHigh=()=>{
        let newList = data.sort((a,b) => (a.hourly_rate > b.hourly_rate) ? 1 : 
        ((b.hourly_rate > a.hourly_rate) ? -1 : 0))
        setData([...newList])
    }

    const getPriceHighToLow=()=>{
        let newList = data.sort((a,b) => (a.hourly_rate > b.hourly_rate) ? -1 : 
        ((b.hourly_rate > a.hourly_rate) ? 1 : 0))
        setData([...newList])
    }

    const handleBikeGet=(_id)=>{
        console.log(_id)
    }

    return (
        <>
            <div className={styles.timeAndDateDiv}>
                <h2>PICK UP</h2>
                <h3> <i class="fas fa-table"> </i> : {date}  <span> <i class="fas fa-grip-lines-vertical"> </i> </span> <i class="far fa-clock"> </i> : {time} </h3>
            </div>
            <div className={styles.sortsDiv}>
                <p>Sort By</p>
                <p onClick={getPopular}>Popular</p>
                <p onClick={getPriceLowToHigh}>Price low - high</p>
                <p onClick={getPriceHighToLow}>Price high - low</p>
            </div>
            <div className={styles.allDataParent}>
                {data.map((item)=>(
                    <div className={styles.indivBike}>
                        <h2>{item.bike_name}</h2>
                        <img src={item.bike_image} alt='bikeImage'/>
                        <h3><i class="fas fa-rupee-sign"> </i> {item.hourly_rate*24*30}/month </h3>
                        <button onClick={()=>handleBikeGet(item._id)}><Link to={`/royalXSearch/${item._id}`} style={{color:"black",fontWeight:"bold"}}>BOOK NOW</Link></button>
                    </div>
                ))}
            </div>
        </>
    )
}

export {RoyalBrosXResults}
