const url = "https://secure-chamber-15246.herokuapp.com/api"
// const url = "http://localhost:8080/api"

export const getResidentsByApartmentId = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}/residents`)
        .then(response => response.json())

export const findResidentById = (id) =>
    fetch(`${url}/residents/${id}`)
        .then(response => response.json())

export const findAllResidents = () =>
    fetch(`${url}/residents`)
        .then(response => response.json())

export const createResident = (resident) =>
    fetch(`${url}/residents`, {
        method: 'POST',
        body: JSON.stringify(resident),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateResident = resident => 
    fetch(`${url}/residents`, {
        method: 'PUT',
        body: JSON.stringify(resident),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response)

export default {
    findAllResidents, createResident, getResidentsByApartmentId, findResidentById, updateResident
}
