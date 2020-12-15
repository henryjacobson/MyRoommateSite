import residentService from "../services/residentService";

export const GET_RESIDENTS_BY_APARTMENT_ID = 'GET_RESIDENTS_BY_APARTMENT_ID'

export const getResidentsByApartmentId = (dispatch, apartmentId) =>
    residentService.getResidentsByApartmentId(apartmentId)
        .then(residents => dispatch({
            type: GET_RESIDENTS_BY_APARTMENT_ID,
            residents: residents
        }))
// dispatch({
//     type: GET_RESIDENTS_BY_APARTMENT_ID,
//     residents: residents
// })
