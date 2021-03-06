import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
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
            notes: " ",
            apartmentId: " "
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
                <div>
                    <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <Link className="navbar-brand disabled" to={'/'}>MyRoommate</Link>
                        <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span class="navbar-toggler-icon"></span>
                        </button>
                        <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                            <div class="navbar-nav">
                                <a class="nav-item nav-link" href="#">
                                    <Link to={`/apartments/${this.state.groceryItem.apartmentId}`}>
                                        Apartment
                                    </Link>
                                </a>
                                <a class="nav-item nav-link" href="#">
                                    <Link to={`/apartments/${this.state.groceryItem.apartmentId}/search`}>
                                        Search Groceries
                                    </Link>
                                </a>
                            </div>
                        </div>
                        {
                            this.props.account &&
                            this.props.account.id !== 0 &&
                            this.props.account.resident &&
                            <div className={'float-right'}>
                                Logged in as: <Link to={'/profile'}>{this.props.account && this.props.account.username}</Link>

                            </div>
                        }
                        {
                            this.props.account &&
                            this.props.account.id !== 0 &&
                            !this.props.account.resident &&
                            <div className={'float-right'}>
                                Logged in as: <Link to={'/admin'}>{this.props.account && this.props.account.username}</Link>

                            </div>
                        }
                    </nav>
                </div>
                <div className="container">
                    <h1>{this.state.groceryItem.title}</h1>
                    <div className="form-group row">
                        <div className="col">
                            <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + this.state.groceryItem.imageUrl} />
                        </div>
                    </div>

                    <a href={`https://en.wikipedia.org/wiki/${this.state.groceryItem.title.split(' ').join('_')}`}
                       target={'_blank'}>
                        More Info
                    </a>

                    <div className="form-group">
                        <label for="description">Notes</label>
                        <textarea
                            value={this.state.groceryItem.notes}
                            className="form-control"
                            id="notes"
                            rows="3"
                            onChange={event => {
                                this.setState(prevState => {
                                    return {
                                        groceryItem: {
                                            ...prevState.groceryItem,
                                            notes: event.target.value
                                        }
                                    }
                                })
                            }}
                        />
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11" >
                            <Link to={`/apartments/${this.state.groceryItem.apartmentId}`}>
                                <button
                                    type="submit"
                                    class="btn btn-primary"
                                    onClick={() => this.props.updateGroceryItem({ ...this.state.groceryItem })}
                                >Save</button>
                            </Link >
                        </div>
                        <div className="col-sm-1">
                            <Link to={`/apartments/${this.state.groceryItem.apartmentId}`}>
                                <button
                                    type="submit"
                                    class="btn btn-danger"
                                    onClick={() => this.props.deleteGroceryItem(this.state.groceryItem.id)}
                                >Delete</button>
                            </Link>
                        </div>
                        </div>
                    </div>
                </div>
        )
    }
}

const stateToPropertyMapper = state => ({
account: state.accountReducer.account
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
