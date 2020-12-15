import choresService from '../services/choresService'

export const GET_CHORES_FOR_APARTMENT = "GET_CHORES_FOR_APARTMENT"
export const GET_CHORE_BY_ID = 'GET_CHORE_BY_ID'
export const UPDATE_CHORE = 'UPDATE_CHORE'
export const CREATE_CHORE = 'CREATE_CHORE'
export const DELETE_CHORE = 'DELETE_CHORE'

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

export const getChoresForApartmentFiltered = (dispatch, apartmentId, name) =>
    // dispatch({
    //     type: GET_CHORES_FOR_APARTMENT,
    //     chores: chores
    // })
    choresService.getChoresForApartment(apartmentId)
        .then(chores => {
            console.log(chores)
            console.log(name)
            dispatch({
                type: GET_CHORES_FOR_APARTMENT,
                chores: chores.filter(chore => chore.asignee === name)
            })
        })

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
        .then(_ => {
            console.log(chore)
            dispatch({
                type: UPDATE_CHORE,
                chore: chore
            })
        })

export const createChore = (dispatch, apartmentId) =>
    choresService.createChore(apartmentId)
        .then(chore => dispatch({
            type: CREATE_CHORE,
            chore
        }))

export const deleteChore = (dispatch, chore) =>
    choresService.deleteChore(chore)
        .then(_ => dispatch({
            type: DELETE_CHORE,
            chore
        }))

