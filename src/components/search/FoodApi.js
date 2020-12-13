import React, { Component } from 'react'
import FoodForm from './FoodForm'
import { createGroceryItem } from '../../actions/groceriesActions';
import 'react-router-dom'
import { connect } from 'react-redux';
import {Link} from 'react-router-dom'

const APIKEY = "66a072032d914d08929e8232de1fde63";

class FoodApi extends Component {
    state = {
        foods: [],
        // apartmentId: ""
    }
    // constructor(props) {
    //     super(props);
    //     this.state.apartmentId = props.apartmentId
    // }
    // componentDidMount() {
    //     const apartmentId = this.props.match.params.apartmentId
    //     console.log(apartmentId)
    // }
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
                                    <span onClick={() =>
                                        this.props.createGroceryItem({
                                            title: food.name,
                                            imageUrl: food.image, notes: "",
                                            apartmentId: console.log(this.props.match.params.apatmentId)
                                        })}
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

