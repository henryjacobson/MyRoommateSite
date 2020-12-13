import React from 'react';
import { connect } from 'react-redux';
import { getGroceryItemById, updateGroceryItem, getGroceriesForApartment} from "../../actions/groceriesActions"

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
            .then(response =>  this.setState({groceryItem: response.groceryItem}))
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
                        <img src={"https://spoonacular.com/cdn/ingredients_400x400/" + this.state.groceryItem.imageUrl} />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea value={this.state.groceryItem.notes} className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button type="submit" class="btn btn-success">Save</button>
                        </div>
                        <div className="col-sm-1">
                            <button type="submit" class="btn btn-danger">Delete</button>
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
    updateGroceryItem: groceryItem => updateGroceryItem(dispatch, groceryItem)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (GroceryItemEditorComponent)