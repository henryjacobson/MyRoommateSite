import React from 'react';
import { connect } from "react-redux";
import EventSearchComponent from "../components/EventSearchComponent"
import {getEvent, getAllEvents} from "../actions/eventActions"

const clientId = "91329415959-v5tvmj401qoej8s18bsalphp5eilnir4.apps.googleusercontent.com"
const clientSecret = "9VJEEsD_crR0SEm3rXuMrtvx"
const apiKey = "AIzaSyC2YfzCxzSQzsHzm7C3q3Fs4TlQpTcHTjk"

const shaneCalendarId = "j7lpf3q3e30p5drgij1h1dl74s@group.calendar.google.com"

class EventSearchContainer extends React.Component {
    componentDidMount() {

    }

    componentDidUpdate() {

    }

    render() {
        return (
            <div>
                <h1>
                    Events
                </h1>

                <div className="container">
                    <div className="row">
                        <div className="col">
                            <div class="input-group mb-3">
                                <input type="text" class="form-control" placeholder="Recipient's username" aria-label="Recipient's username" aria-describedby="basic-addon2" />
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                        <div className="col">
                            <div class="input-group">
                                <select class="custom-select" id="inputGroupSelect04">
                                    <option selected>Choose...</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                                <div class="input-group-append">
                                    <button class="btn btn-outline-secondary" type="button">Button</button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="row">
                        {getAllEvents(shaneCalendarId)}
                    </div>
                </div>
            </div>
        )
    }
}

const stateToPropertyMapper = (state) => ({

})

const propertyToDispatchMapper = (dispatch) => ({
    getAllEvents: (calendarId) => getAllEvents(dispatch, calendarId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (EventSearchContainer)