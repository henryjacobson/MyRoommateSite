import {
    GET_APARTMENT_BY_ID
} from "../actions/apartmentActions";

const initialState = {
    apartment: {
        title: '',
        address: ''
    }
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
                apartment: apartment //action.apartment
            }
        default:
            return state
    }
}

export default apartmentReducer
