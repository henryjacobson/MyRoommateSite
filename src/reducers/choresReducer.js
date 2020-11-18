import {
    GET_CHORES_FOR_APARTMENT
} from "../actions/choresActions";

const initialState = {
    chores: []
}

const choresReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_CHORES_FOR_APARTMENT:
            return {
                ...state,
                chores: action.chores
            }
        default:
            return state
    }
}

export default choresReducer
