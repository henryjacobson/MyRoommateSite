import {
    GET_APARTMENT_BY_ID, GET_ALL_APARTMENTS, CREATE_APARTMENT, GET_APARTMENTS_BY_EVENT_ID
} from "../actions/apartmentActions";

const initialState = {
    apartment: {
        title: '',
        address: ''
    },
    invitedApartments: []
}

const apartmentReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_APARTMENT_BY_ID:
            return {
                ...state,
                apartment: apartment //action.apartment
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
        case GET_APARTMENTS_BY_EVENT_ID:
            return {
                ...state,
                invitedApartments: action.invitedApartments
            }
        default:
            return state
    }
}

export default apartmentReducer
