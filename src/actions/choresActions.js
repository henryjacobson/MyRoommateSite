import choresService from '../services/choresService'

export const GET_CHORES_FOR_APARTMENT = "GET_CHORES_FOR_APARTMENT"
export const GET_CHORE_BY_ID = 'GET_CHORE_BY_ID'
export const UPDATE_CHORE = 'UPDATE_CHORE'

export const getChoresForApartment = (dispatch, apartmentId) =>
    // dispatch({
    //     type: GET_CHORES_FOR_APARTMENT,
    //     chores: choresService.getChoresForApartment(apartmentId)
    // })
    choresService.getChoresForApartment(apartmentId)
        .then(chores => dispatch({
            type: GET_CHORES_FOR_APARTMENT,
            chores: chores
        }))

export const getChoreById = (dispatch, choreId) =>
    choresService.getChoreById(choreId)
        .then(chore => dispatch({
            type: GET_CHORE_BY_ID,
            chore: chore
        }))

export const updateChore = (dispatch, chore) =>
    choresService.updateChore(chore)
        .then(_ => dispatch({
            type: UPDATE_CHORE,
            chore: chore
        }))
