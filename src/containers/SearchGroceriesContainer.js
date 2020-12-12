import React from 'react'
import FoodApi from '../components/search/FoodApi'

class SearchGroceriesContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Groceries
                </h1>
                <FoodApi/>
            </div>
        )
    }
}

export default SearchGroceriesContainer 



