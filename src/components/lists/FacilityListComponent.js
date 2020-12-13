import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import AddFacilityComponent from './AddFacilityComponent'

const FacilityListComponent = ({
    facilities = [],
    addFacility
}) =>
    <ul className={'list-group'}>
        {
            facilities.map(facility =>
                <li className={'list-group-item'} key={facility.id} >
                    <Link to={`edit/facility/${facility.id}`}>
                        {facility.title}
                    </Link>
                </li>
            )
        }
        <li className={'list-group'}>
            <AddFacilityComponent/>
        </li>
    </ul >

const stateToPropertyMapper = state => ({
    facilities: state.facilityReducer.facilities
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (FacilityListComponent)