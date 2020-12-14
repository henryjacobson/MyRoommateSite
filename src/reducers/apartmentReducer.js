import {
    GET_APARTMENT_BY_ID, GET_ALL_APARTMENTS, CREATE_APARTMENT
} from "../actions/apartmentActions";

const initialState = {
    apartment: {
        title: '',
        address: ''
    },
    apartments: []
}

const apartment = {
    _id: 0,
    title: "apartment 0",
    address: "neu"
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
                ...state,
                apartment: action.apartment
            }
        default:
            return state
    }
}

export default apartmentReducer
