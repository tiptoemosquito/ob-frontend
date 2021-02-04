export const getTheaters = () =>{
    return (dispatch) => {
        dispatch({type: "LOADING_THEATERS"})
        fetch('/theaters')
        .then(res => res.json())
        .then(theaters => dispatch({type: "FETCH_THEATERS", payload: theaters}))
    }
}

export const addTheater = (theater) => {
    return (dispatch) => {
        dispatch({type: "ADD_THEATER"})
        fetch('/theaters', {
            method: 'POST',
            body: JSON.stringify(theater),
            header:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(theater => dispatch({type: "THEATER_ADDED"}))
    }
}
