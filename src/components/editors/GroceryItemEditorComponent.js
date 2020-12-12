import React from 'react';
import { connect } from 'react-redux';
import {getGroceryItemById, updateGroceryItem} from "../../actions/groceriesActions"

class GroceryItemEditorComponent extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.groceryItem = props.groceryItem
    }

    componentDidMount() {
        this.props.getGroceryItemById(this.props.match.params.groceryItemId)
            .then(_ => this.setState({ groceryItem: this.props.groceryItem }))
    }

    render() {
        return (
            <div>
                <h1>
                    Grocery Editor
                </h1>
                <div className="container">
                    <div className="form-group row">
                        <div className="col">
                            Item Name
                        </div>
                        <div className="col">
                            Item Image
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
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
    getGroceryItemById: groceryItemId => getGroceryItemById(dispatch, groceryItemId),
    updateGroceryItem: groceryItem => updateGroceryItem(dispatch, groceryItem)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (GroceryItemEditorComponent)