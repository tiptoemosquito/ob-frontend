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
                
            case "ADD_THEATER":
                return {
                    ...state, 
                    loading: true
                }

            case "THEATER_ADDED":
                return {
                    ...state,
                    theaters: [...state.theaters, action.payload],
                    loading: true
                }

            default:
                return state; 
        }
}

export default theaterReducer