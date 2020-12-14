import {
    GET_RESIDENTS_BY_APARTMENT_ID
} from "../actions/residentActions";


const residents = [
    {
        id: 0,
        name: 'Henry'
    },
    {
        id: 1,
        name: 'Shane'
    },
    {
        id: 2,
        name: 'Akira'
    }
]

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
