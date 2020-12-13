const url = "https://secure-chamber-15246.herokuapp.com/api"
// const url = "http://localhost:8080/api"

export const getEventById = (eventId) =>
    fetch(`${url}/events/${eventId}`)
        .then(response => response.json())

export const getAllEvents = () =>
    fetch(`${url}/events`)
        .then(response => response.json())

export const getEventsForApartmentId = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}/events`)
        .then(response => response.json())

export const deleteEvent = (calendarId, eventId) => {

}

export const createEvent = (calendarId, event) => {

}

export const updateEvent = (calendarId, eventId) => {

}

export default {
    getEventById, getAllEvents, getEventsForApartmentId
}

