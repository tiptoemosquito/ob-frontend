export const getTheaters = () =>{
    return (dispatch) => {
        dispatch({type: "LOADING_THEATERS"})
        fetch('/theaters'
        .then(res => res.json())
        .then(theaters => dispatch({type: "FETCH_THEATERS", payload: theaters}))
        )
    }
}