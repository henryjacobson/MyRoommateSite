import searchService from '../services/searchService'

export const GET_SEARCH_RESULTS = "GET_SEARCH_RESULTS"
export const UPDATE_SEARCH_RESULTS = "UPDATE_SEARCH_RESULTS"

export const getSearchResults = (dispatch, searchResults) =>
    searchService.getSearchResults(searchResults)
        .then(serviceEvent =>
            dispatch({
                type: GET_SEARCH_RESULTS,
                searchResults: serviceEvent
            }))

export const updateSearchResults = (dispatch, searchResults) =>
    searchService.updateSearchResults(searchResults)
        .then(serviceEvent =>
            dispatch({
                type: UPDATE_SEARCH_RESULTS,
                searchResults
            }))
