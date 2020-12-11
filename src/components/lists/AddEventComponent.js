import React from 'react'
import { Link } from "react-router-dom";

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
                    !this.state.newEvent&&
                    <button className="form-control btn btn-primary" onClick={() =>
                        this.setState(prevState => ({ ...prevState, newEvent: true }))}>
                        Add Event
                </button>
                }
                {
                    this.state.newEvent &&

                        <div className="form-group row">
                            <div className="col-sm-8">
                                <input className="form-control"/>
                            </div>
                            <Link to={`edit/event`}>
                            <button className="btn btn-primary col-sm-12 form-control" onClick={() =>
                                this.setState(prevState => ({ ...prevState, newEvent: false }))}>
                                OK
                            </button>
                        </Link>
                        </div>
                        
                }
            </div>
        )
    }
}

export default AddEventComponent