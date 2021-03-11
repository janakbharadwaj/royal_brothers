import * as todoActions from "./actionType"
const initState={
    
    relevantData:[]
}
const bikeFilterReducer=(state=initState,{type,payload})=>{
 switch(type)
 {
     case todoActions.GET_BIKES_FILTER_REQUEST:
         return (
             {
                 ...state,
             }
         )
     case todoActions.GET_BIKES_FILTER_SUCCESS:
         return (
             {
                 ...state,
                relevantData:payload
             }
         )
    case todoActions.GET_BIKES_FILTER_FAILURE:
        return (
            {
                ...state,
                
            }
        )
     default:
            return state
 }

}
export default bikeFilterReducer