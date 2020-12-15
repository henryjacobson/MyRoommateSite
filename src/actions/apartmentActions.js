import apartmentService from "../services/apartmentService";

export const GET_APARTMENT_BY_ID = 'GET_APARTMENT_BY_ID'
export const GET_ALL_APARTMENTS = 'GET_ALL_APARTMENTS'
export const CREATE_APARTMENT = 'CREATE_APARTMENT'
export const GET_APARTMENTS_BY_EVENT_ID = 'GET_APARTMENTS_BY_EVENT_ID'
export const GET_APARTMENTS_BY_ADMIN_ID = 'GET_APARTMENTS_BY_ADMIN_ID'
export const INVITE_APARTMENT_TO_EVENT = 'INVITE+APARTMENT_TO_EVENT'

// const apartment = {
//     id: 0,
//     title: "apartment 0",
//     address: "neu"
// }

export const getApartmentById = (dispatch, apartmentId) =>
    apartmentService.getApartmentById(apartmentId)
        .then(apartment => dispatch({
            type: GET_APARTMENT_BY_ID,
            apartment: apartment
        }))

export const createApartment = (dispatch, apartment) =>
        apartmentService.createApartment(apartment)
            .then(apartment => dispatch({
                type: CREATE_APARTMENT,
                apartment
            }))

export const getAllApartments = (dispatch) =>
    apartmentService.getAllApartments()
        .then(apartments => dispatch({
            type: GET_ALL_APARTMENTS,
            apartments
        }))

export const getApartmentsForEventId = (dispatch, eventId) =>
    apartmentService.getApartmentsForEventId(eventId)
        .then(invitedApartments => dispatch({
            type: GET_APARTMENTS_BY_EVENT_ID,
            invitedApartments
        }))

export const inviteApartmentToEvent = (dispatch, eventId, apartmentId) =>
    apartmentService.inviteApartmentToEvent(eventId, apartmentId)
        .then(() => {
            getApartmentsForEventId(dispatch, eventId)
        })

export const getApartmentsForAdminId = (dispatch, adminId) =>
    apartmentService.getApartmentsForAdminId(adminId)
        .then(invitedApartments => dispatch({
            type: GET_ALL_APARTMENTS,
            apartments: invitedApartments
        }))
