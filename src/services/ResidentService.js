const url = "https://secure-chamber-15246.herokuapp.com/api/"

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

export default {
    findAllResidents, createResident
}
