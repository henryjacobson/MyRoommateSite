import eventService from "../services/googleCalendarEventService"

const GET_EVENT = "GET_EVENT "
const GET_ALL_EVENTS = "GET_ALL_EVENTS"
const DELETE_EVENT = "DELETE_EVENT"
const CREATE_EVENT = "CREATE_EVENT"
const UPDATE_EVENT = "UPDATE_EVENT"

export const getEvent = (dispatch, calendarId, eventId) => 
    eventService.getEvent(calendarId, eventId)
        .then(serviceEvent => dispatch({
            type: GET_EVENT,
            event: serviceEvent
        }))

export const getAllEvents = (dispatch, calendarId) => 
    eventService.getAllEvents(calendarId)
        .then(serviceEvents => dispatch({
            type: GET_ALL_EVENTS,
            events: serviceEvents
        }))

export const deleteEvent = () => {
    
}
export const createEvent = () => {
    
}
export const updateEvent = () => {
    
}