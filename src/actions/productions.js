export const getProductions = () =>{
    return (dispatch) => {
        dispatch({type: "LOADING_PRODUCTIONS"})
        fetch('/productions')
        .then(res => res.json())
        .then(productions => dispatch({type: "FETCH_PRODUCTIONS", payload: productions}))
    }
}
