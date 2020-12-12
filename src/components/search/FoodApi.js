import React, { Component } from 'react'
import FoodForm from './FoodForm'

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
                                    <span className="float-right">
                                        add
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

export default FoodApi

