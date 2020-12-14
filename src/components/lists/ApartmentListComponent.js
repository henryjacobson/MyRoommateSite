import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';
import AddApartmentComponent from './AddApartmentComponent';

const ApartmentListComponent = ({
    apartments = []
}) =>
    <ul className={'list-group'}>
        {
            apartments.map(apartment =>
                <li className={'list-group-item'} key={apartment.id}>
                    <Link to={`/apartments/${apartment.id}`}>
                        {apartment.address}
                    </Link>
                </li>
            )

        }
        <li className={'list-group'}>
            <AddApartmentComponent />
        </li>
    </ul>

const stateToPropertyMapper = state => ({
    apartments: state.apartmentReducer.apartments
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper) 
(ApartmentListComponent )
