import{
    GET_SEARCH_RESULTS,
    UPDATE_SEARCH_RESULTS
}  from "../actions/searchActions"

const initialState ={
    searchResults: {
        parameter: "apple",
        results: []
    }
}

export const searchResultsReducer = (state=initialState, action) => {
    switch (action.type) {
        case GET_SEARCH_RESULTS: 
            return {
                ...state,
                searchResults: action.searchResult
            }
        case UPDATE_SEARCH_RESULTS:
            return {
                ...state,
                searchResults: state.searchResult
            }
        default:
            return state
    }
}

export default searchResultsReducer