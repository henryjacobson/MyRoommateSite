import {
    GET_EVENT,
    GET_ALL_EVENTS,
    DELETE_EVENT,
    CREATE_EVENT,
    UPDATE_EVENT
} from "../actions/eventActions"

export const eventReducer =  (state={}, action) => {
    switch (action.type) {
        case GET_EVENT:
            return {
                ...state,
                event: action.event
            }
        case GET_ALL_EVENTS:
            return {
                ...state,
                events: action.events
            }
        case DELETE_EVENT:
            return {

            }
        case CREATE_EVENT:
            return {
                
            }
        case UPDATE_EVENT:
            return {
                
            }
        default:
            return state
    }
}

export default eventReducer