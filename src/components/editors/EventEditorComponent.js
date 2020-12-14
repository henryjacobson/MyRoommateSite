import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getEventById, updateEvent, deleteEvent } from "../../actions/eventActions";

class EventEditorComponent extends React.Component {
    state = {
        event: {
            title: "",
            dateTime: "",
            location: "",
            description: ""
        }
    }

    constructor(props) {
        super(props);
        this.props.getEventById(this.props.match.params.eventId)
            .then(response => { this.setState({ event: response.event }) })
    }

    // componentDidMount() {
    //     this.props.getEventById(this.props.match.params.eventId)
    //         .then(_ => this.setState({ event: this.props.event }))
    // }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand disabled" href="#">Edit Event: {this.state.event.title}</a>
                    <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarNavAltMarkup">
                        <div class="navbar-nav">
                            <a class="nav-item nav-link" href="#">
                                <Link to='/admin'>
                                    Admin Home
                                </Link>
                            </a>

                        </div>
                    </div>
                </nav>
                <div className="container">
                    <div className="form-group row">
                        <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="inputTitle" value={this.state.event.title} placeholder="Title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="datetimeInput" className="col-2 col-form-label">Date and time</label>
                        <div className="col-10">
                            <input
                                className="form-control"
                                type="datetime-local"
                                // defaultValue="2011-08-19T13:45:00" 
                                value={this.state.event.dateTime}
                                id="datetimeInput" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea className="form-control" value={this.state.event.description} id="description" rows="3"></textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                        <div className="col-sm-1">
                            <Link to='/admin'>
                                <button
                                    type="submit"
                                    className="btn btn-danger"
                                    onClick={() => this.props.deleteEvent(this.state.event.id)}>
                                    Delete
                                </button>
                            </Link>

                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = state => ({
    // event: state.eventReducer.event
})

const propertyToDispatchMapper = dispatch => ({
    getEventById: eventId => getEventById(dispatch, eventId),
    updateEvent: event => updateEvent(dispatch, event),
    deleteEvent: eventId => deleteEvent(dispatch, eventId),
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (EventEditorComponent)