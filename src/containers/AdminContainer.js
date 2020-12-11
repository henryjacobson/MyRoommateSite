import React from 'react'
import { Link } from "react-router-dom";
import ApartmentListComponent from "../components/lists/ApartmentListComponent"
import FacilityListComponent from "../components/lists/FacilityListComponent"
import EventListComponent from "../components/lists/EventListComponent"
import GoogleCalendar from '../components/googleCalendarExample';
import FoodApi from '../components/search/foodApiExample'

const AdminContainer = ({

}) =>
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
        <GoogleCalendar/>
        <FoodApi/>
    </div>

export default AdminContainer