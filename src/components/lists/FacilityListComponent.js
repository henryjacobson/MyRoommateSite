import React from 'react';
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import AddFacilityComponent from './AddFacilityComponent'
import {deleteFacility} from '../../actions/facilityActions'

const FacilityListComponent = ({
    facilities = [],
    deleteFacility
}) =>
    <ul className={'list-group'}>
        {
            facilities.map(facility =>
                <li className={'list-group-item'} key={facility.id} >
                    <Link to={`edit/facility/${facility.id}`}>
                        {facility.type}
                    </Link>
                    <span className="float-right">
                        <button className={'btn btn-danger'} onClick={() => deleteFacility(facility.id)}>
                            <i className={'fa fa-times float-right'} />
                        </button>
                    </span>
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
    deleteFacility: facilityId => deleteFacility(dispatch, facilityId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (FacilityListComponent)
