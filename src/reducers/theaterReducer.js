const theaterReducer = (state = {theaters: [], loading: false}, action) => {
        switch(action.type) {
            case "LOADING_THEATERS":
                return {
                    ...state, 
                    loading: true
                }
            
            case "FETCH_THEATERS":
                return {
                    ...state,
                    theaters: action.payload,
                    loading: false
                }    

            default:
                return state; 
        }
}

export default theaterReducer