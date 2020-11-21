import React from 'react'
import { Link } from "react-router-dom";
import { Icon } from 'semantic-ui-react'

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

                        <div class="form-group row">
                            <div class="col-sm-8">
                                <select class="custom-select" id="facilityType">
                                    <option selected>Choose...</option>
                                    <option value="gym">Gym</option>
                                    <option value="washing machine">Washing Machine</option>
                                    <option value="pool">Pool</option>
                                    <option value="tennis court">Tennis Court</option>
                                </select>
                            </div>
                            <Link to={`edit/facility`}>
                            <button className="btn btn-primary col-sm-12 form-control" onClick={() =>
                                this.setState(prevState => ({ ...prevState, newFacility: false }))}>
                                OK
                            </button>
                        </Link>
                        </div>
                        
                }
            </div>
        )
    }
}

export default AddFacilityComponent