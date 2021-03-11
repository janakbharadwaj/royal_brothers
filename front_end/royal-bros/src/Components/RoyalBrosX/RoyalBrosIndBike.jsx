import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import axios from 'axios'

const RoyalBrosIndBike = () => {
    const [indBike,setIndBike] = React.useState([])
    const { id } = useParams();
    console.log(id)
    React.useEffect(()=>{
        axios.get(`http://localhost:8080/bikes/${id}`)
        .then((res)=>setIndBike(res.data.data))
    },[])
    console.log(indBike.bike_name)
    return (
        <div>
            {indBike.bike_name}
        </div>
    )
}

export {RoyalBrosIndBike}