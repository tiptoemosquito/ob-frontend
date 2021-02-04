export const getProductions = () =>{
    return (dispatch) => {
        dispatch({type: "LOADING_PRODUCTIONS"})
        fetch('/productions')
        .then(res => res.json())
        .then(productions => dispatch({type: "FETCH_PRODUCTIONS", payload: productions}))
    }
}

export const addProduction = (production) => {
    return (dispatch) => {
        dispatch({type: "ADD_THEATER"})
        fetch('/productions', {
            method: 'POST',
            body: JSON.stringify(production),
            header:{
                'Content-Type': 'application/json'
            }
        })
        .then(res => res.json())
        .then(production => dispatch({type: "PRODUCTION_ADDED"}))
    }
}