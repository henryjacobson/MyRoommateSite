import {
    GET_CHORES_FOR_APARTMENT,
    GET_CHORE_BY_ID,
    UPDATE_CHORE
} from "../actions/choresActions";

const initialState = {
    chores: [],
    chore: {
        type: 'chore',
        description: '',
        deadline: '',
        assignee: ''
    }
}

const choresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHORES_FOR_APARTMENT:
            return {
                ...state,
                chores: action.chores
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
