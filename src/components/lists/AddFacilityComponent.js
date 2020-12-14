import React from 'react'
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'
import { createFacility } from "../../actions/facilityActions";

class AddFacilityComponent extends React.Component {
    constructor() {
        super()
        this.state = {
            newFacility: false
        }
    }
    render() {
        return (
            <div>
                {
                    !this.state.newFacility &&
                    <button className="form-control btn btn-primary" onClick={() =>
                        this.setState(prevState => ({ ...prevState, newFacility: true }))}>
                        Add Facility
                </button>
                }
                {
                    this.state.newFacility &&

                    <div className="form-group row">
                        <div className="col-sm-8">
                            <select className="custom-select" id="facilityType"
                                onChange={event => {
                                    this.setState(prevState => {
                                        return {
                                            type: event.target.value
                                        }
                                    })
                                }}>
                                <option selected>Choose...</option>
                                <option value="gym">Gym</option>
                                <option value="washing machine">Washing Machine</option>
                                <option value="pool">Pool</option>
                                <option value="tennis court">Tennis Court</option>
                            </select>
                        </div>
                        <span>
                            <button className="btn btn-primary col-sm-12 form-control" onClick={() => {
                                this.setState(prevState => ({ ...prevState, newFacility: false }))
                                this.state.type &&
                                    this.props.createFacility(this.state.type)
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
    createFacility: type => createFacility(dispatch, type)
})

export default connect
    (stateToProperty, propertyToDispatch)
    (AddFacilityComponent)
