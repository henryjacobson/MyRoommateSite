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
                <h1>
                    Search Food
                </h1>
                <FoodForm getFood={this.getFood} />
                <ul>
                    {this.state.foods.map(food => {
                        return <li key={food.id}>
                            <img src={"https://spoonacular.com/cdn/ingredients_100x100/"+food.image}/>{food.name}
                        </li>
                    })}
                </ul>

            </div>
        )
    }

}

export default FoodApi

