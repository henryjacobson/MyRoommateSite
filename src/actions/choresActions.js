import choresService from '../services/choresService'

export const GET_CHORES_FOR_APARTMENT = "GET_CHORES_FOR_APARTMENT"

export const getChoresForApartment = (dispatch, apartmentId) =>
    dispatch({
        type: GET_CHORES_FOR_APARTMENT,
        chores: choresService.getChoresForApartment(apartmentId)
    })
    // choresService.getChoresForApartment(apartmentId)
    //     .then(chores => dispatch({
    //         type: GET_CHORES_FOR_APARTMENT,
    //         chores: chores
    //     }))
