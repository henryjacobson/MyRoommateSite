const url = 'http://localhost:8080/api/apartments'

const chores = [
    {
        _id: 10,
        apartmentId: 0,
        title: "chore 0"
    },
    {
        _id: 11,
        apartmentId: 0,
        title: "chore 1"
    },
    {
        _id: 12,
        apartmentId: 0,
        title: "chore 2"
    },
    {
        _id: 13,
        apartmentId: 1,
        title: "chore 3"
    },
    {
        _id: 14,
        apartmentId: 1,
        title: "chore 4"
    }
]

export const getChoresForApartment = apartmentId =>
    fetch(`${url}/${apartmentId}/chores`)
        .then(response => response.json())
    // chores.filter(chore => {
    //     console.log(chore.apartmentId)
    //     console.log(apartmentId)
    //     return chore.apartmentId === apartmentId
    // })

export default{
    getChoresForApartment
}
