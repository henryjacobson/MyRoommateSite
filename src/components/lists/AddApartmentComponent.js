import React from 'react'
import { Link } from "react-router-dom";
import { connect } from 'react-redux';
import { createApartment } from "../../actions/apartmentActions"

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
                            <input
                                className="form-control"
                                placeholder="Address"
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            apartment: { address: event.target.value }
                                        }
                                    })
                                }} />
                        </div>
                        <span>
                            <button className="btn btn-primary col-sm-12 form-control" onClick={() => {
                                this.setState(prevState => ({ ...prevState, newApartment: false }))
                                this.state.apartment && this.props.createApartment(this.state.apartment)
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
    createApartment: apartment => createApartment(dispatch, apartment)
})

export default connect
    (stateToProperty, propertyToDispatch)
    (AddApartmentComponent)