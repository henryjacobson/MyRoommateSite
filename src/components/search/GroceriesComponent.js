import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'

const GroceriesComponent = ({
    groceries = [],
    apartment
}) => <ul className={'list-group'}>
        {
            groceries.map(item =>
                <li className={'list-group-item'}
                    key={item.id}>
                    <Link to={`/apartments/${apartment.id}/groceries`}>
                        {item.title}
                    </Link>
                </li>
            )
        }
    </ul>

const stateToPropertyMapper = state => ({
    groceries: state.groceriesReducer.groceries,
    apartment: state.apartmentReducer.apartment
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (GroceriesComponent)