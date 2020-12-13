import choresService from '../services/choresService'

export const GET_CHORES_FOR_APARTMENT = "GET_CHORES_FOR_APARTMENT"
export const GET_CHORE_BY_ID = 'GET_CHORE_BY_ID'
export const UPDATE_CHORE = 'UPDATE_CHORE'

// const chores = [
//     {
//         id: 10,
//         apartmentId: 0,
//         description: "chore 0"
//     },
//     {
//         id: 11,
//         apartmentId: 0,
//         description: "chore 1"
//     },
//     {
//         id: 12,
//         apartmentId: 0,
//         description: "chore 2"
//     },
//     {
//         id: 13,
//         apartmentId: 1,
//         description: "chore 3"
//     },
//     {
//         id: 14,
//         apartmentId: 1,
//         description: "chore 4"
//     }
// ]

export const getChoresForApartment = (dispatch, apartmentId) =>
    // dispatch({
    //     type: GET_CHORES_FOR_APARTMENT,
    //     chores: chores
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
// dispatch({
//     type: GET_CHORE_BY_ID,
//     chore: chores[0]
// })

export const updateChore = (dispatch, chore) =>
    choresService.updateChore(chore)
        .then(_ => dispatch({
            type: UPDATE_CHORE,
            chore: chore
        }))

