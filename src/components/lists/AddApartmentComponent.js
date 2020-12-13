import React from 'react'
import { Link } from "react-router-dom";

class AddApartmentComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            newApartment: false
        }
    }
    render() {
        return (
            <div>
                {
                    !this.state.newApartment &&
                    <button className="form-control btn btn-primary" onClick={() =>
                        this.setState(prevState => ({ ...prevState, newApartment: true }))}>
                        Add Apartment
                </button>
                }
                {
                    this.state.newApartment &&

                    <div className="form-group row">
                        <div className="col-sm-8">
                            <input className="form-control" />
                        </div>
                        <span>
                            <button className="btn btn-primary col-sm-12 form-control" onClick={() =>
                                this.setState(prevState => ({ ...prevState, newApartment: false }))}>
                                OK
                            </button>
                        </span>

                    </div>

                }
            </div>
        )
    }
}

export default AddApartmentComponent