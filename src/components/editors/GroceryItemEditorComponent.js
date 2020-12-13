import React from 'react';
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'
import {
    getGroceryItemById,
    updateGroceryItem,
    getGroceriesForApartment,
    deleteGroceryItem
} from "../../actions/groceriesActions"

class GroceryItemEditorComponent extends React.Component {
    state = {
        groceryItem: {
            title: " ",
            imageUrl: " ",
            note: " "
        }
    }

    constructor(props) {
        super(props);
        this.props.getGroceryItemById(this.props.match.params.groceryItemId)
            .then(response => this.setState({ groceryItem: response.groceryItem }))
    }

    render() {
        return (
            <div>
                <h1>
                    {this.state.groceryItem.title}
                </h1>
                <div className="container">
                    <div className="form-group row">
                        <div className="col">
                            <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + this.state.groceryItem.imageUrl} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description">Notes</label>
                        <textarea
                            value={this.state.groceryItem.notes}
                            className="form-control"
                            id="notes"
                            rows="3"
                            onChange={(event) => this.props.updateGroceryItem({ ...this.state.groceryItem, notes: event.target.value })} />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11" >
                            <Link to={`/apartments/${this.state.groceryItem.apartmentId}`}>
                                <button
                                    type="submit"
                                    class="btn btn-success"
                                // onClick={() => this.props.updateGroceryItem(
                                //     { ...this.state.groceryItem, notes: document.getElementById("notes") })}
                                >Save</button>
                            </Link >
                        </div>
                        <div className="col-sm-1">
                            <button
                                type="submit"
                                class="btn btn-danger"
                                onClick={() => this.props.deleteGroceryItem(this.state.groceryItem.id)}
                            >Delete</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = state => ({

})

const propertyToDispatchMapper = dispatch => ({
    getGroceriesForApartment: apartmentId => getGroceriesForApartment(dispatch, apartmentId),
    getGroceryItemById: groceryItemId => getGroceryItemById(dispatch, groceryItemId),
    updateGroceryItem: groceryItem => updateGroceryItem(dispatch, groceryItem),
    deleteGroceryItem: groceryItemId => deleteGroceryItem(dispatch, groceryItemId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (GroceryItemEditorComponent)