const URL = 'http://localhost:3001'


export const getTheaters = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_THEATERS"})
        fetch (URL + '/theaters')
        .then(res => res.json())
        .then(theaters => dispatch({type: "FETCH_THEATERS", payload: theaters}))
    }
}

export const addTheater = theater => {
    return (dispatch) => {
        dispatch({type: "ADD_THEATER"})
        fetch (URL + '/theaters', {
            method: 'POST',
            body: JSON.stringify(theater),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(theater => dispatch({type: "THEATER_ADDED", payload: theater}))
    }
}

export const addTheaterProduction = (production) => {
    return (dispatch) => {
        dispatch({type: "ADD_THEATER_PRODUCTION"})
        fetch (URL + '/productions', {
            method: 'POST',
            body: JSON.stringify(production),
            headers: {
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(production => dispatch({type: "THEATER_PRODUCTION_ADDED", payload: production}))
    }
}