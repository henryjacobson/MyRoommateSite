import {
    GET_EVENT,
    GET_ALL_EVENTS,
    DELETE_EVENT,
    CREATE_EVENT,
    UPDATE_EVENT
} from "../actions/eventActions"

const initialState = {
    events: [{ id: 1, title: "event1" }, { id: 2, title: "event2" }, { id: 3, title: "event3" }],
    event: {
        title: '',
        location: '',
        date: '',
        time: '',
        description: ''
    }
}

export const eventReducer =  (state=initialState, action) => {
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