import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import AddApartmentComponent from './AddApartmentComponent';
import {findAccountByCookies} from "../../services/AccountService";

const ApartmentListComponent = ({
    apartments = [],
    account
}) =>
    <ul className={'list-group'}>
        {
            apartments.map(apartment =>
                <li className={'list-group-item'} key={apartment.id}>
                    {
                        <Link to={`/apartments/${apartment.id}`}>
                            {apartment.address}
                        </Link>
                    }

                </li>
            )

        }
        <li className={'list-group'}>
            {
                account &&
                account.id !== 0 &&
                !account.resident &&
                <AddApartmentComponent />
            }
        </li>
    </ul>

const stateToPropertyMapper = state => ({
    apartments: state.apartmentReducer.apartments,
    account: state.accountReducer.account
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper) 
(ApartmentListComponent )
