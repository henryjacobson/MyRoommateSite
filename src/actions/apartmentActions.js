import apartmentService from "../services/apartmentService";

export const GET_APARTMENT_BY_ID = 'GET_APARTMENT_BY_ID'

export const getApartmentById = (dispatch, apartmentId) =>
    // dispatch({
    //     type: GET_APARTMENT_BY_ID,
    //     apartment: apartmentService.getApartmentById(apartmentId)
    // })
    apartmentService.getApartmentById(apartmentId)
        .then(apartment => dispatch({
            type: GET_APARTMENT_BY_ID,
            apartment: apartment
        }))
