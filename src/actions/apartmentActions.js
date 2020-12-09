import apartmentService from "../services/apartmentService";

export const GET_APARTMENT_BY_ID = 'GET_APARTMENT_BY_ID'

const apartment = {
    id: 0,
    title: "apartment 0",
    address: "neu"
}

export const getApartmentById = (dispatch, apartmentId) =>
    dispatch({
        type: GET_APARTMENT_BY_ID,
        apartment: apartment
    })
    // apartmentService.getApartmentById(apartmentId)
    //     .then(apartment => dispatch({
    //         type: GET_APARTMENT_BY_ID,
    //         apartment: apartment
    //     }))
