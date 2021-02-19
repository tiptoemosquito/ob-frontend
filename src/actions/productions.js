const URL = 'http://localhost:3001'

export const getProductions = () => {
    return (dispatch) => {
        dispatch({type: "LOADING_PRODUCTIONS"})
        fetch (URL + '/productions')
        .then(res => res.json())
        .then(productions => dispatch({type: "FETCH_PRODUCTIONS", payload: productions}))
    }
}
