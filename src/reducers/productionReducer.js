const productionReducer = (state = {productions: [], loading: false}, action) => {
    switch(action.type) {
        case "LOADING_PRODUCTIONS":
            return {
                ...state,
                loading: true
            }

        case "FETCH_PRODUCTIONS":
            return {
                ...state,
                productions: action.payload,
                loading: false
            }    

        case "ADD_PRODUCTION":
            return {
                ...state,
                loading: true
            } 
        
        case "PRODUCTION_ADDED":
            return {
                ...state,
                productions: [...state.productions, action.payload],
                loading: false
            }

        default:
            return state;
    }
}

export default productionReducer;