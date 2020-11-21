import facilityService from "../services/facilityService"

export const GET_FACILITY = "GET_FACILITY "
export const GET_ALL_FACILITIES = "GET_ALL_FACILITIES"
export const DELETE_FACILITY = "DELETE_FACILITY"
export const CREATE_FACILITY = "CREATE_FACILITY"
export const UPDATE_FACILITY = "UPDATE_FACILITY"

export const getFacilityById = (dispatch, calendarId, facilityId) =>
    facilityService.getFacility(calendarId, facilityId)
        .then(serviceFacility => dispatch({
            type: GET_FACILITY,
            facility: serviceFacility
        }))

export const getAllFacilities = (dispatch, calendarId) =>
    facilityService.getAllFacilities(calendarId)
        .then(serviceFacilities => dispatch({
            type: GET_ALL_FACILITIES,
            facilities: serviceFacilities
        }))

export const deleteFacility = () => {

}
export const createFacility = () => {

}
export const updateFacility = () => {

}