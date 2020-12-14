const url = "https://secure-chamber-15246.herokuapp.com/api"
// const url = 'http://localhost:8080/api'

const getGroceriesForApartment = apartmentId =>
    fetch(`${url}/apartments/${apartmentId}/groceries`)
        .then(response => response.json())

const getGroceryItemById = groceryItemId =>
    fetch(`${url}/groceries/${groceryItemId}`)
        .then(response => response.json())

const updateGroceryItem = groceryItem =>
    fetch(`${url}/groceries`, {
        method: 'PUT',
        body: JSON.stringify(groceryItem),
        headers: {
            'content-type': 'application/json'
        }
    })
        .then(response => response.json())

const deleteGroceryItem = groceryItemId =>
    fetch(`${url}/groceries/${groceryItemId}`, {
        method: 'DELETE'
    })
        .then()

const createGroceryItem = (apartmentId, groceryItem) =>
    fetch(`${url}/groceries`, {
        method: "POST",
        body: JSON.stringify(groceryItem),
        headers: {
            "content-type": "application/json"
        }
    }).then(response => response.json())

export default {
    getGroceriesForApartment,
    getGroceryItemById,
    updateGroceryItem,
    deleteGroceryItem,
    createGroceryItem
}
