const url = "https://wbdv-generic-server.herokuapp.com/api/team2/facilities"

export const getFacility = (facilityId) => 
    fetch(`${url}/facilities/${facilityId}`)
        .then(response => response.json())

export const getAllFacilities = () => 
    fetch(`${url}/facilities`)
        .then(response => response.json())

export const deleteFacility = (facilityId) => {

}

export const createFacility= (facility) => {

}

export const updateFacility = (facilityId) => {

}

export default {
    getFacility, getAllFacilities
}