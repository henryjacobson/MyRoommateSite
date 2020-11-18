const chores = [
    {
        _id: 10,
        apartmentId: 0,
        title: "chore 0"
    }
]

export const getChoresForApartment = apartmentId =>
    chores.filter(chore => chore.apartmentId !== apartmentId)

export default{
    getChoresForApartment
}
