import {
    GET_CHORES_FOR_APARTMENT,
    GET_CHORE_BY_ID,
    UPDATE_CHORE
} from "../actions/choresActions";

const chores = [
    {
        _id: 10,
        apartmentId: 0,
        title: "chore 0"
    },
    {
        _id: 11,
        apartmentId: 0,
        title: "chore 1"
    },
    {
        _id: 12,
        apartmentId: 0,
        title: "chore 2"
    },
    {
        _id: 13,
        apartmentId: 1,
        title: "chore 3"
    },
    {
        _id: 14,
        apartmentId: 1,
        title: "chore 4"
    }
]

const initialState = {
    chores: chores,
    chore: chores[0]
}



const choresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHORES_FOR_APARTMENT:
            return {
                ...state,
                chores: chores // action.chores
            }
        case GET_CHORE_BY_ID:
            return {
                ...state,
                chore: action.chore
            }
        case UPDATE_CHORE:
            return {
                ...state,
                chore: action.chore
            }
        default:
            return state
    }
}

export default choresReducer
