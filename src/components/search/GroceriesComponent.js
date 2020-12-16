import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteGroceryItem } from "../../actions/groceriesActions"

const GroceriesComponent = ({
    groceries = [],
    apartment,
    deleteGroceryItem,
    account
}) => <ul className={'list-group'}>
        {
            groceries.map(item =>
                <li className={'list-group-item'}
                    key={item.id}>
                    {
                        account &&
                        account.id !== 0 &&
                        <Link to={`/edit/groceries/${item.id}`}>
                            {item.title}
                        </Link>
                    }
                    {
                        account &&
                        account.id === 0 &&
                        <Link to={`/login`}>
                            {item.title}
                        </Link>
                    }
                    {''} NOTES: {item.notes}
                    {
                        account &&
                        account.id !== 0 &&
                        <span className="float-right">
                        <button className={'btn btn-danger'} onClick={() => deleteGroceryItem(item.id)}>
                        <i className={'fa fa-times float-right'}/>
                        </button>
                    </span>
                    }
                </li>
            )
        }
    </ul>

const stateToPropertyMapper = state => ({
    groceries: state.groceriesReducer.groceries,
    apartment: state.apartmentReducer.apartment,
    account: state.accountReducer.account
})

const propertyToDispatchMapper = dispatch => ({
    deleteGroceryItem: groceryItemId => deleteGroceryItem(dispatch, groceryItemId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (GroceriesComponent)
