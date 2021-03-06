const url = 'https://secure-chamber-15246.herokuapp.com/api'
// const url = 'http://localhost:8080/api'

// const chores = [
//     {
//         _id: 10,
//         apartmentId: 0,
//         title: "chore 0"
//     },
//     {
//         _id: 11,
//         apartmentId: 0,
//         title: "chore 1"
//     },
//     {
//         _id: 12,
//         apartmentId: 0,
//         title: "chore 2"
//     },
//     {
//         _id: 13,
//         apartmentId: 1,
//         title: "chore 3"
//     },
//     {
//         _id: 14,
//         apartmentId: 1,
//         title: "chore 4"
//     }
// ]

export const getChoresForApartment = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}/chores`)
        .then(response => response.json())
    // chores.filter(chore => {
    //     console.log(chore.apartmentId)
    //     console.log(apartmentId)
    //     return chore.apartmentId === apartmentId
    // })

export const getChoreById = choreId =>
    fetch(`${url}/chores/${choreId}`)
        .then(response => response.json())

export const updateChore = chore =>
    fetch(`${url}/chores`, {
        method: 'PUT',
        body: JSON.stringify(chore),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response)

export const createChore = apartmentId =>
    fetch(`${url}/chores`, {
        method: 'POST',
        body: JSON.stringify({
            description: "New Chore",
            deadline: "2020:1:1 0:0:0",
            apartmentId
        }),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

export const deleteChore = chore =>
    fetch(`${url}/chores/${chore.id}`, {
        method: 'DELETE'
    })
        .then()

export default{
    getChoresForApartment, getChoreById, updateChore, createChore, deleteChore
}
