// const url = "https://wbdv-generic-server.herokuapp.com/api/team2/facilities"
const url = "https://secure-chamber-15246.herokuapp.com/api"
// const url = 'http://localhost:8080/api'

export const getFacility = (facilityId) => 
    fetch(`${url}/facilities/${facilityId}`)
        .then(response => response.json())

export const getAllFacilities = () => 
    fetch(`${url}/facilities`)
        .then(response => response.json())

export const deleteFacility = (facilityId) =>
    fetch(`${url}/facilities/${facilityId}`, {
        method: 'DELETE'
    })
        .then()

export const createFacility= (type) =>
    fetch(`${url}/facilities`, {
        method: 'POST',
        body: JSON.stringify({
            type,
            status: 'working',
            notes: ''
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const updateFacility = (facility) =>
    fetch(`${url}/facilities`, {
        method: 'PUT',
        body: JSON.stringify(facility),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response)

export default {
    getFacility, getAllFacilities, createFacility, deleteFacility, updateFacility
}
