import apartmentService from "../services/apartmentService";

export const GET_APARTMENT_BY_ID = 'GET_APARTMENT_BY_ID'
export const GET_ALL_APARTMENTS = 'GET_ALL_APARTMENTS'

// const apartment = {
//     id: 0,
//     title: "apartment 0",
//     address: "neu"
// }

export const getApartmentById = (dispatch, apartmentId) =>
    apartmentService.getApartmentById(apartmentId)
        .then(apartment => dispatch({
            type: GET_APARTMENT_BY_ID,
            apartment: apartment
        }))
// dispatch({
//     type: GET_APARTMENT_BY_ID,
//     apartment: apartment
// })

export const getAllApartments = (dispatch) =>
    apartmentService.getAllApartments()
        .then(apartments => dispatch({
            type: GET_ALL_APARTMENTS,
            apartments
        }))
