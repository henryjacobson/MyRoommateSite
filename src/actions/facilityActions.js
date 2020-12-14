import facilityService from "../services/facilityService"

export const GET_FACILITY = "GET_FACILITY "
export const GET_ALL_FACILITIES = "GET_ALL_FACILITIES"
export const DELETE_FACILITY = "DELETE_FACILITY"
export const CREATE_FACILITY = "CREATE_FACILITY"
export const UPDATE_FACILITY = "UPDATE_FACILITY"

export const getFacilityById = (dispatch, facilityId) =>
    facilityService.getFacility(facilityId)
        .then(serviceFacility => dispatch({
            type: GET_FACILITY,
            facility: serviceFacility
        }))

export const getAllFacilities = (dispatch) =>
    facilityService.getAllFacilities()
        .then(serviceFacilities => dispatch({
            type: GET_ALL_FACILITIES,
            facilities: serviceFacilities
        }))

export const deleteFacility = (dispatch, facilityId) =>
    facilityService.deleteFacility(facilityId)
        .then(_ => dispatch({
            type: DELETE_FACILITY,
            facilityId
        }))

export const createFacility = (dispatch, type) =>
    facilityService.createFacility(type)
        .then(facility => dispatch({
            type: CREATE_FACILITY,
            facility: facility
        }))

export const updateFacility = (dispatch, facility) =>
    facilityService.updateFacility(facility)
        .then(facility => dispatch({
            type: UPDATE_FACILITY,
            facility
        }))

export const localUpdateFacility = (dispatch, facility) =>
    dispatch({
        type: UPDATE_FACILITY,
        facility
    })
