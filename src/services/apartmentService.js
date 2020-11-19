const url = 'http://localhost:8080/api/apartments'

const apartment = {
    _id: 0,
    title: "apartment 0",
    address: "neu"
}

export const getApartmentById = apartmentId =>
    fetch(`${url}/${apartmentId}`)
        .then(response => response.json())
    // apartment

export default {
    getApartmentById
}
