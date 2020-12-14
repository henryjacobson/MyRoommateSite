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

export const deleteEvent = (eventId) => 
    fetch(`${url}/events/${eventId}`, {
        method: 'DELETE'
    })
        .then()

export const createEvent = (event) => 
    fetch(`${url}/events`, {
        method: 'POST',
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateEvent = (event) => 
    fetch(`${url}/events`, {
        method: 'PUT',
        body: JSON.stringify(event),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response)

export default {
    getEventById, getAllEvents, updateEvent, createEvent, deleteEvent, getEventsForApartmentId
}

