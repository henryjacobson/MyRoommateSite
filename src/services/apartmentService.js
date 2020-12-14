const url = 'https://secure-chamber-15246.herokuapp.com/api'
// const url = 'http://localhost:8080/api'
// const apartment = {
//     _id: 0,
//     title: "apartment 0",
//     address: "neu"
// }

export const getApartmentById = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}`)
        .then(response => response.json())
    // apartment

export const getAllApartments = () =>
    fetch(`${url}/apartments`)
        .then(response => response.json())

export const createApartment = (apartment) =>
    fetch(`${url}/apartments`, {
        method: 'POST',
        body: JSON.stringify(apartment),
        headers: {'content-type': 'application/json'}
    })
        .then(response => response.json())

export const getApartmentsForEventId = (eventId) =>
    fetch(`${url}/events/${eventId}/apartments`)
        .then(response => response.json())

export const inviteApartmentToEvent = (eventId, apartmentId) =>
    fetch(`${url}/rsvp/${eventId}/${apartmentId}`, {
        method: 'POST'
    })
        .then()

export default {
    getApartmentById, getAllApartments, createApartment, getApartmentsForEventId, inviteApartmentToEvent
}
