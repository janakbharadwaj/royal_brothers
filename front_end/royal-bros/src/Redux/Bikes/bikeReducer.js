import * as todoActions from "./actionType"
const initState={
    isLoading:false,
    isError:false,
    bikesData:[]
}
const bikeReducer=(state=initState,{type,payload})=>{
 switch(type)
 {
     case todoActions.GET_BIKES_REQUEST:
         return (
             {
                 ...state,
                 isLoading:true,
                 isError:false
             }
         )
     case todoActions.GET_BIKES_SUCCESS:
         return (
             {
                 ...state,
                 isLoading:false,
                 bikesData:payload,
                 isError:false
             }
         )
    case todoActions.GET_BIKES_FAILURE:
        return (
            {
                ...state,
                isLoading:false,
                isError:true
            }
        )
     default:
            return state
 }

}
export default bikeReducer