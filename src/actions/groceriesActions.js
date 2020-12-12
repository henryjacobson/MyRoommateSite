import groceriesService from '../services/groceriesService'

export const GET_GROCERIES_FOR_APARTMENT = "GET_GROCERIES_FOR_APARTMENT"
export const GET_GROCERY_ITEM_BY_ID = "GET_GROCERY_ITEM_BY_ID"
export const UPDATE_GROCERY_ITEM = "UPDATE_GROCERY_ITEM"
export const DELETE_GROCERY_ITEM = "DELETE_GROCERY_ITEM"
export const CREATE_GROCERY_ITEM = "CREATE_GROCERY_ITEM"

export const getGroceriesForApartment = (dispatch, apartmentId) =>
    groceriesService.getGroceriesForApartment(apartmentId)
        .then(groceries => dispatch({
            type: GET_GROCERIES_FOR_APARTMENT,
            groceries
        }))

export const getGroceryItemById = (dispatch, groceryItemId) =>
    groceriesService.getGroceryItemById(groceryItemId)
        .then(item => dispatch({
            type: GET_GROCERY_ITEM_BY_ID,
            groceryItem: item
        }))

export const updateGroceryItem = (dispatch, groceryItem) =>
    groceriesService.updateGroceryItem(groceryItem)
        .then(response => dispatch({
            type: UPDATE_GROCERY_ITEM,
            groceryItem
        }))

export const deleteGroceryItem = (dispatch, groceryItemId) =>
    groceriesService.deleteGroceryItem(groceryItemId)
        .then(response => dispatch({
            type: DELETE_GROCERY_ITEM,
            groceryItemId
        }))

export const createGroceryItem = (dispatch, apartmentId, groceryItem) =>
    groceriesService.createGroceryItem(apartmentId, groceryItem)
        .then(response =>
            dispatch({
                type: CREATE_GROCERY_ITEM,
                groceryItem
            })
        )
