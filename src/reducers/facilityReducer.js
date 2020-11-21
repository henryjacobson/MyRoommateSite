import {
    GET_FACILITY,
    GET_ALL_FACILITIES,
    DELETE_FACILITY,
    CREATE_FACILITY,
    UPDATE_FACILITY
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
                FACILITIES: action.FACILITIES
            }
        case DELETE_FACILITY:
            return {

            }
        case CREATE_FACILITY:
            return {
                
            }
        case UPDATE_FACILITY:
            return {
                
            }
        default:
            return state
    }
}

export default facilityReducer