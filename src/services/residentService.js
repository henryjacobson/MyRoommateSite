const url = 'http://localhost:8080/api'

export const getResidentsByApartmentId = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}/residents`)
        .then(response => response.json())

export default {
    getResidentsByApartmentId
}
