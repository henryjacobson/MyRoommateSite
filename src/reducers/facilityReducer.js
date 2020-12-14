import {
    GET_FACILITY,
    GET_ALL_FACILITIES,
    DELETE_FACILITY,
    CREATE_FACILITY,
    UPDATE_FACILITY, LOCAL_UPDATE_FACILITY
} from "../actions/facilityActions"

const initialState = {
    facilities: [{ id: 1, title: "facility1" }, { id: 2, title: "facility2" }, { id: 3, title: "facility" }],
    facility: {
        title: '',
        description: '',
        status: ''
    }
}

export const facilityReducer =  (state=initialState, action) => {
    switch (action.type) {
        case GET_FACILITY:
            return {
                ...state,
                facility: action.facility
            }
        case GET_ALL_FACILITIES:
            return {
                ...state,
                facilities: action.facilities
            }
        case DELETE_FACILITY:
            return {
                ...state,
                facilities: state.facilities.filter(facility => facility.id !== action.facilityId)
            }
        case CREATE_FACILITY:
            return {
                ...state,
                facilities: [
                    ...state.facilities,
                    action.facility
                ]
            }
        case UPDATE_FACILITY:
            return {
                ...state,
                facility: state.facility
            }
        default:
            return state
    }
}

export default facilityReducer
