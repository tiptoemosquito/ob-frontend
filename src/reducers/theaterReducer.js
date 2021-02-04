const theaterReducer = (state = {theaters: [], loading: false}, action) => {
        switch(action.type) {
            case "LOADING_THEATERS":
                return {
                    ...state, 
                    loading: true
                }
            default:
                return state; 
        }
}

export default theaterReducer