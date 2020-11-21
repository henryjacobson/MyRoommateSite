import React from 'react';
import { Link } from "react-router-dom";
import {connect} from 'react-redux';

const FacilityListComponent = ({
    facilities = []
}) =>
    <ul class="list-group-item">
        {
            facilities.map(facility =>
                <li key={facility.id} >
                    <Link to={`edit/facility/${facility.id}`}>
                        {facility.title}
                    </Link>
                </li>
            )
        }
        <li>
            <Link to={`edit/facility`}>
                Add Facility
            </Link>
        </li>
    </ul>

const stateToPropertyMapper = state => ({
    facilities: state.facilityReducer.facilities
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(FacilityListComponent)