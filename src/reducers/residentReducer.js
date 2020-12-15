import {
    GET_RESIDENTS_BY_APARTMENT_ID
} from "../actions/residentActions";


const residents = []

const initialState = {
    residents: residents
}

const residentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_RESIDENTS_BY_APARTMENT_ID:
            return {
                ...state,
                residents: action.residents
            }
        default:
            return state
    }
}

export default residentReducer
