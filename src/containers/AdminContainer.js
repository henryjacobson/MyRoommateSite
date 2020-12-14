import React from 'react'
import { connect } from 'react-redux'
import ApartmentListComponent from "../components/lists/ApartmentListComponent"
import FacilityListComponent from "../components/lists/FacilityListComponent"
import EventListComponent from "../components/lists/EventListComponent"
import GoogleCalendar from '../components/googleCalendarExample';
import { getAllFacilities } from "../actions/facilityActions";
import { getAllEvents } from "../actions/eventActions";
import { getAllApartments } from "../actions/apartmentActions";
import FoodApi from '../components/search/FoodApi'

class AdminContainer extends React.Component {
    componentDidMount() {
        this.props.getAllFacilities()
        this.props.getAllEvents()
        this.props.getAllApartments()
    }

    // componentDidUpdate(prevProps, prevState, snapshot) {
    //     this.props.getAllFacilities()
    //     this.props.getAllEvents()
    //     this.props.getAllApartments()
    // }

    render() {
        return (
            <div>
                <div>
                    <nav className="navbar navbar-expand-lg navbar-light bg-light">
                        <a className="navbar-brand disabled" href="#">Admin</a>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                    </nav>
                </div>
                <div className="container">
                    <div className="row">
                        <div className="col-3">
                            <div className="row justify-content-start">
                            <h3>Facilities</h3>
                            </div>
                            
                            <FacilityListComponent />
                        </div>
                        <div className="col-6">
                            <div className=" row justify-content-center">
                                <h3>Events</h3>
                            </div>

                            <EventListComponent />
                        </div>
                        <div className="col-3">
                        <div className=" row justify-content-end">
                                <h3>Apartments</h3>
                            </div>
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
