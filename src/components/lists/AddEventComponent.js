import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { createEvent } from "../../actions/eventActions";

class AddEventComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            newEvent: false
        }
    }
    render() {
        return (
            <div>
                {
                    !this.state.newEvent &&
                    <button className="form-control btn btn-primary" onClick={() =>
                        this.setState(prevState => ({ ...prevState, newEvent: true }))}>
                        Add Event
                </button>
                }
                {
                    this.state.newEvent &&

                    <div className="form-group row">
                        <div className="col-sm-8">
                            <input
                                className="form-control"
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            event: {title: event.target.value}
                                        }
                                    })
                                }} />
                        </div>
                        <span>
                            <button className="btn btn-primary col-sm-12 form-control" onClick={() => {
                                this.setState(prevState => ({ ...prevState, newEvent: false }))
                                this.state.event && this.props.createEvent(this.state.event)
                            }}>
                                OK
                            </button>
                        </span>

                    </div>

                }
            </div>
        )
    }
}

const stateToProperty = state => ({

})

const propertyToDispatch = dispatch => ({
    createEvent: event => createEvent(dispatch, event)
})

export default connect
    (stateToProperty, propertyToDispatch)
    (AddEventComponent)