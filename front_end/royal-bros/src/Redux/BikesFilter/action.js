import axios from "axios"
import * as todoActions from "./actionType"
const getBikesFilterRequest=()=>{
    return (
        {
            type:todoActions.GET_BIKES_FILTER_REQUEST
        }
    )
}
const getBikesFilterSuccess=(payload)=>{
    return (
        {
            type:todoActions.GET_BIKES_FILTER_SUCCESS,
            payload
        }
    )
}
const getBikesFilterFailure=()=>{
    return (
        {
            type:todoActions.GET_BIKES_FILTER_FAILURE
        }
    )
}
const getBikesFilters=(arr)=>(dispatch)=>{
    dispatch(getBikesFilterRequest())
    return axios.post("http://localhost:8080/filters/bikes",arr)
    .then((res)=>{
        console.log(res.data)
        dispatch(getBikesFilterSuccess(res.data))})
    .catch((err)=>dispatch( getBikesFilterFailure()))
    
}
export default getBikesFilters
