import {
    GET_APARTMENT_BY_ID
} from "../actions/apartmentActions";

const initialState = {
    apartment: {
        title: '',
        address: ''
    }
}

const apartmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APARTMENT_BY_ID:
            return {
                ...state,
                apartment: action.apartment
            }
        default:
            return state
    }
}

export default apartmentReducer
