const url = "https://secure-chamber-15246.herokuapp.com/api"

export const getSearchResults = (searchResults) =>
    fetch(`${url}/searchResults/${searchResults.id}`)
        .then(response => response.json())

export const updateSearchResults = (searchResult) =>
    fetch(`${url}/searchResult`, {
        method: 'PUT',
        body: JSON.stringify(searchResult),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response)

export default {
    getSearchResults, updateSearchResults
}