import React from 'react'
import axios from 'axios'

const RoyalBrosX = () => {
    const [data,setData] = React.useState([])

    function getData(){
        axios.get("http://localhost:8080/bikes")
        .then((res)=>setData(res.data.data))
    }

    React.useEffect(()=>{
        getData()
    },[])

    return (
        <div>
            {data.map((item)=>(
                <h2>{item.bike_name}</h2>
            ))}
        </div>
    )
}

export {RoyalBrosX}
