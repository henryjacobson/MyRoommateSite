import React from 'react'
import {connect} from 'react-redux'
import ApartmentListComponent from "../components/lists/ApartmentListComponent"
import FacilityListComponent from "../components/lists/FacilityListComponent"
import EventListComponent from "../components/lists/EventListComponent"
import GoogleCalendar from '../components/googleCalendarExample';
import {getAllFacilities} from "../actions/facilityActions";
import {getAllEvents} from "../actions/eventActions";
import {getAllApartments} from "../actions/apartmentActions";
import FoodApi from '../components/search/FoodApi'

class AdminContainer extends React.Component {
    componentDidMount() {
        this.props.getAllFacilities()
        this.props.getAllEvents()
        this.props.getAllApartments()
    }

    render() {
        return (
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col">
                            Name Here
                        </div>
                        <div className="col">
                            123 n address dr
                        </div>
                        <div className="col">
                            email@gmail.com
                        </div>
                    </div>
                    <div className="row">
                        <div className="col-3">
                            <FacilityListComponent />
                        </div>
                        <div className="col-6">
                            <EventListComponent />
                        </div>
                        <div className="col-3">
                            <ApartmentListComponent />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

const stateToProperty = state => ({

})

const propertyToDispatch = dispatch => ({
    getAllFacilities: () => getAllFacilities(dispatch),
    getAllEvents: () => getAllEvents(dispatch),
    getAllApartments: () => getAllApartments(dispatch)
})

export default connect
(stateToProperty, propertyToDispatch)
(AdminContainer)
