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
                    loading: false
                }

            case "ADD_THEATER_PRODUCTION":
                return {
                    ...state,
                    loading: true
                }

            case "THEATER_PRODUCTION_ADDED":
                // const newTheaters = state.theaters.map((th) => {
                //     if (th.id === action.payload.theater_id) {
                //         return {...th, productions: [...th.productions, action.payload]}
                //     } else {
                //         return th
                //     }
                // })
                return {
                    ...state, 
                    theaters: [...state.theaters, action.payload], 
                    loading: false
                }

            default:
                return state; 
        }
}

export default theaterReducer