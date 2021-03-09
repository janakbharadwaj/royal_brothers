import  * as todoActions from "./actionType"
import axios from "axios"
 
const getBikesRequest=()=>{
    return (
        {
            type:todoActions.GET_BIKES_REQUEST
        }
    )
}
const getBikesSuccess=(payload)=>{
    return (
        {
            type:todoActions.GET_BIKES_SUCCESS,
            payload
        }
    )
}
const getHostsFailure=()=>{
    return (
        {
            type:todoActions.GET_BIKES_FAILURE
        }
    )
}
const getBikes=()=>(dispatch)=>{
    dispatch(getBikesRequest())
    return axios.get("https://json-server-mock-react-sahil.herokuapp.com/bikes")
    .then((res)=>dispatch(getBikesSuccess(res.data)))
    .catch((err)=>dispatch(getHostsFailure()))
    
}
export default getBikes
