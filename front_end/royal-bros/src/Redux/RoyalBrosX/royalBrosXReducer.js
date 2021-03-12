import * as actions from './actionTypes'

const initState={
    isLoading:false,
    isError:false,
    data:[]
}

const royalBrosXReducer=(state=initState,{type,payload})=>{
    switch(type){
        case actions.GET_BIKE_REQUEST:
            return(
                {
                    ...state,
                    isLoading:true,
                    isError:false
                }
            )
        case actions.GET_BIKE_SUCCESS:
            return(
                {
                    ...state,
                    isLoading:false,
                    isError:false,
                    data:payload
                }
            )
        case actions.GET_BIKE_FAILURE:
            return(
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

export default royalBrosXReducer