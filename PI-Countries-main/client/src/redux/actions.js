
export const CLEAN_COUNTRIES = "CLEAN_COUNTRIES";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const SET_COUNTRIES = "SET_COUNTRIES";

export const getCountries = () => {
    return function (dispatch) {
        fetch("http://localhost:3001/countries")
            .then(response => { return response.json() })
            .then(data => {
                dispatch({
                    type: GET_COUNTRIES,
                    payload: data,
                });
            }).catch((err) => console.log(err));
    };
};

export const cleanCountries = () => {
    return ({
        type: CLEAN_COUNTRIES,
    })
}

export const setCountries = (value) => {
    return ({
            type: SET_COUNTRIES,
            payload: value,
        })
}


/* dispatch(getUsers()) */