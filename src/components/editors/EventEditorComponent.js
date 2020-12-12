import React from 'react';
import { connect } from 'react-redux';
import { getEventById, updateEvent } from "../../actions/eventActions";

class EventEditorComponent extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.event = props.event
    }

    componentDidMount() {
        this.props.getEventById(this.props.match.params.eventId)
            .then(_ => this.setState({ event: this.props.event }))
    }

    render() {
        return (
            <div>
                <h1>
                    Event Editor - 
                    {/* {this.props.event.title} */}
                </h1>
                <div className="container">
                    <div className="form-group row">
                        <label for="inputTitle" className="col-sm-2 col-form-label">Title</label>
                        <div className="col-sm-10">
                            <input className="form-control" id="inputTitle" placeholder="Title" />
                        </div>
                    </div>
                    <div className="form-group row">
                        <label for="datetimeInput" className="col-2 col-form-label">Date and time</label>
                        <div className="col-10">
                            <input className="form-control" type="datetime-local" value="2011-08-19T13:45:00" id="datetimeInput" />
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="description">Description</label>
                        <textarea className="form-control" id="description" rows="3"></textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button type="submit" className="btn btn-success">Save</button>
                        </div>
                        <div className="col-sm-1">
                            <button type="submit" className="btn btn-danger">Delete</button>
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
    updateEvent: event => updateEvent(dispatch, event)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (EventEditorComponent)