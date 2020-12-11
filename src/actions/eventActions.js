import eventService from "../services/googleCalendarEventService"

export const GET_EVENT = "GET_EVENT "
export const GET_ALL_EVENTS = "GET_ALL_EVENTS"
export const DELETE_EVENT = "DELETE_EVENT"
export const CREATE_EVENT = "CREATE_EVENT"
export const UPDATE_EVENT = "UPDATE_EVENT"

export const getEventById = (dispatch, calendarId, eventId) =>
    eventService.getEventById(calendarId, eventId)
        .then(serviceEvent => dispatch({
            type: GET_EVENT,
            event: serviceEvent
        }))

export const getAllEvents = (dispatch) =>
    eventService.getAllEvents()
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
