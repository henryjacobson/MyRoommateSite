const url = 'https://secure-chamber-15246.herokuapp.com/api'

const apartment = {
    _id: 0,
    title: "apartment 0",
    address: "neu"
}

export const getApartmentById = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}`)
        .then(response => response.json())
    // apartment

export const getAllApartments = () =>
    fetch(`${url}/apartments`)
        .then(response => response.json())

export default {
    getApartmentById, getAllApartments
}