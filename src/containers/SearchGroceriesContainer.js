import React from 'react'
import FoodApi from '../components/search/FoodApi'
import GroceriesComponent from '../components/search/GroceriesComponent'

class SearchGroceriesContainer extends React.Component {
    render() {
        return (
            <div>
                <h1>
                    Groceries
                </h1>
                <div className='row'>
                    <div className='col'>
                        <FoodApi/>
                    </div>
                    <div className='col'>
                        <GroceriesComponent/>
                    </div>
                </div>
                
            </div>
        )
    }
}

export default SearchGroceriesContainer 



