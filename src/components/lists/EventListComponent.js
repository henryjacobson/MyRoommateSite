import React from 'react';
import {connect} from 'react-redux';
import { Link } from "react-router-dom";
import AddEventComponent from './AddEventComponent'

const EventListComponent = ({
    events = []
}) =>
    <ul class="list-group-item">
        {
            events.map(event =>
                <li key={event.id} >
                    <Link to={`edit/event/${event.id}`}>
                        {event.title}
                    </Link>
                </li>
            )
        }
        <li>
            <AddEventComponent/>
        </li>
    </ul>

const stateToPropertyMapper = state => ({
    events: state.eventReducer.events
})

const propertyToDispatchMapper = dispatch => ({

})

export default connect
(stateToPropertyMapper, propertyToDispatchMapper)
(EventListComponent)