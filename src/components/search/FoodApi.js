import React, { Component } from 'react'
import { createGroceryItem } from '../../actions/groceriesActions';
import 'react-router-dom'
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { updateSearchResults } from '../../actions/searchActions'

const APIKEY = "66a072032d914d08929e8232de1fde63";

class FoodApi extends Component {
    state = {
        foods: [],
        search: ""
        // apartmentId: ""
    }
    getFood = async (e) => {
        const food = e.target.elements.foodName.value + "";

        const foodUrl = `https://api.spoonacular.com/food/ingredients/search?query=${food}&apiKey=${APIKEY}`;

        e.preventDefault();
        const apiCall = await fetch(foodUrl);

        const data = await apiCall.json();
        this.setState({ foods: data.results })
        console.log(this.state.foods);
    }

    render() {
        return (
            <div>
                <div>

                    <form onSubmit={this.getFood}>
                        <input 
                        id="itemSearch" 
                        type="text" 
                        name="foodName" 
                        onChange={event => {
                            this.setState(prevState => {
                                return {
                                    ...prevState,
                                    search: event.target.value
                                }
                            })
                        }} />
                            <button className={'btn btn-primary'}>
                                Search
                            </button>
                    </form>

                </div >

                <ul className={'list-group'}>
                    {this.state.foods.map(food => {
                        return <li className={'list-group-item'} key={food.id}>
                            <div className='row'>
                                <div className='col'>
                                    <img src={"https://spoonacular.com/cdn/ingredients_100x100/" + food.image} />
                                </div>
                                <div className='col'>
                                    <h4>{food.name}</h4>
                                </div>
                                <div className='col'>
                                    {
                                        this.props.account &&
                                        this.props.account.id === 0 &&
                                        <Link to="/login">
                                            <button className="btn btn-success">
                                                add
                                        </button>
                                        </Link>
                                    }
                                    {
                                        this.props.account &&
                                        this.props.account.id !== 0 &&
                                        <span onClick={() => {
                                            console.log(this.props);
                                            this.props.createGroceryItem({
                                                title: food.name,
                                                imageUrl: food.image, notes: "",
                                                apartmentId: this.props.apartment.id
                                            })
                                        }}
                                            className="float-right">
                                            <button className="btn btn-success">
                                                add
                                        </button>
                                        </span>
                                    }
                                </div>
                            </div>
                        </li>
                    })}
                </ul>

            </div >
        )
    }
}

const stateToPropertyMapper = state => ({
    food: state.searchReducer,
    apartment: state.apartmentReducer.apartment,
    account: state.accountReducer.account
})

const propertyToDispatchMapper = dispatch => ({

    createGroceryItem: groceryItem => createGroceryItem(dispatch, groceryItem.apartmentId, groceryItem)
})

export default
    connect
        (stateToPropertyMapper, propertyToDispatchMapper)
        (FoodApi)

