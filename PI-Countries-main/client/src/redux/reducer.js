
import { CLEAN_COUNTRIES, GET_COUNTRIES, SET_COUNTRIES } from "./actions";

const inicialState = {
    countries: [],
}

const rootReducer = (state = inicialState, action) => {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...state,
                countries: action.payload
            }
        case CLEAN_COUNTRIES:
            return {
                ...state,
                countries: [],
            }
        case SET_COUNTRIES:
            return{
                ...state,
                countries: action.payload
            }
        default:
            return {
                ...state,
            }
    }
}

export default rootReducer;


