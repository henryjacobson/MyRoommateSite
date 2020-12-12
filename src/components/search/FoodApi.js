import React, { Component } from 'react'
import FoodForm from './FoodForm'
import { createGroceryItem } from '../../actions/groceriesActions';
import { connect } from 'react-redux';

const APIKEY = "66a072032d914d08929e8232de1fde63";

class FoodApi extends Component {
    state = {
        foods: []
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
                <FoodForm getFood={this.getFood} />

                {/* <div className='row'>
                    <div className='col'>
                        <img src={"https://spoonacular.com/cdn/ingredients_100x100/"} />
                    </div>
                    <div className='col'>
                        <h4>example</h4>
                    </div>
                    <div className='col'>
                        <span onClick={() =>
                            this.props.createGroceryItem({ title: "new item", imageUrl: "", notes: "", apartmentId: 0 })}
                            className="float-right">
                            <button className="btn btn-success">
                                add
                            </button>

                        </span>
                    </div>
                </div> */}

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
                                    <span onClick={() =>
                                        this.props.createGroceryItem({ title: food.name, imageUrl: food.image, notes: "", apartmentId: 0 })}
                                        className="float-right">
                                        <button className="btn btn-success">
                                            add
                            </button>

                                    </span>
                                </div>
                            </div>

                        </li>
                    })}
                </ul>

            </div>
        )
    }
}

const stateToPropertyMapper = state => ({

})

const propertyToDispatchMapper = dispatch => ({
    createGroceryItem: groceryItem => createGroceryItem(dispatch, groceryItem.apartmentId, groceryItem)
})

export default
    connect
        (stateToPropertyMapper, propertyToDispatchMapper)
        (FoodApi)

