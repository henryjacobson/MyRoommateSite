import {
    GET_EVENT,
    GET_ALL_EVENTS,
    DELETE_EVENT,
    CREATE_EVENT,
    UPDATE_EVENT, GET_EVENTS_FOR_APARTMENT_ID
} from "../actions/eventActions"

const initialState = {
    events: [],
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
        case GET_EVENTS_FOR_APARTMENT_ID:
            return {
                ...state,
                events: action.events
            }
        case DELETE_EVENT:
            return {
                ...state,
                events: state.events.filter(event => event.id !== action.eventId)
            }
        case CREATE_EVENT:
            return {
                ...state,
                events: [
                    ...state.events,
                    action.event
                ]
            }
        case UPDATE_EVENT:
            return {
                ...state,
                event: state.event
            }
        default:
            return state
    }
}

export default eventReducer
