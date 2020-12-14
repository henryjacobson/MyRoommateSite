import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteGroceryItem } from "../../actions/groceriesActions"

const GroceriesComponent = ({
    groceries = [],
    apartment,
    deleteGroceryItem
}) => <ul className={'list-group'}>
        {
            groceries.map(item =>
                <li className={'list-group-item'}
                    key={item.id}>
                    <Link to={`/edit/groceries/${item.id}`}>
                        {item.title}
                    </Link>
                    : {item.notes}
                    <span className="float-right">
                        <button className={'btn btn-danger'} onClick={() => deleteGroceryItem(item.id)}>
                        <i className={'fa fa-times float-right'}/>
                        </button>
                    </span>
                </li>
            )
        }
    </ul>

const stateToPropertyMapper = state => ({
    groceries: state.groceriesReducer.groceries,
    apartment: state.apartmentReducer.apartment,
})

const propertyToDispatchMapper = dispatch => ({
    deleteGroceryItem: groceryItemId => deleteGroceryItem(dispatch, groceryItemId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (GroceriesComponent)
