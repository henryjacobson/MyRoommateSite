import {
    GET_APARTMENT_BY_ID, GET_ALL_APARTMENTS, CREATE_APARTMENT
} from "../actions/apartmentActions";

const initialState = {
    apartments: [],
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
        case GET_ALL_APARTMENTS:
            return {
                ...state,
                apartments: action.apartments
            }
        case CREATE_APARTMENT:
            return {
                ...state, apartments: [
                    ...state.apartments,
                    action.apartment
                ]
            }
        default:
            return state
    }
}

export default apartmentReducer
