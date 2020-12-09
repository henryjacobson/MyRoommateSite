import residentService from "../services/ResidentService";

export const GET_RESIDENTS_BY_APARTMENT_ID = 'GET_RESIDENTS_BY_APARTMENT_ID'

const residents = [
    {
        id: 0,
        name: 'Henry'
    },
    {
        id: 1,
        name: 'Shane'
    },
    {
        id: 2,
        name: 'Akira'
    }
]

export const getResidentsByApartmentId = (dispatch, apartmentId) =>
    dispatch({
        type: GET_RESIDENTS_BY_APARTMENT_ID,
        residents: residents
    })
    // residentService.getResidentsByApartmentId(apartmentId)
    //     .then(residents => dispatch({
    //         type: GET_RESIDENTS_BY_APARTMENT_ID,
    //         residents: residents
    //     }))
