import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import { getFacilityById, updateFacility } from "../../actions/facilityActions";

class FacilityEditorComponent extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.facility = props.facility
        const facilityId = this.props.match.params.facilityId
        this.props.getFacilityById(facilityId)
            .then(response => console.log(response) )
                // .then(console.log(this.state.facility))
    }

    componentDidMount() {
        
        
    }

    render() {
        return (
            <div>
                <nav class="navbar navbar-expand-lg navbar-light bg-light">
                    <a class="navbar-brand disabled" href="#">Edit Facility: </a>
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
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="facilityType">Facility Type</label>
                        <div class="col-sm-10">
                            <select class="custom-select" id="facilityType">
                                <option selected>Choose...</option>
                                <option value="gym">Gym</option>
                                <option value="washing machine">Washing Machine</option>
                                <option value="pool">Pool</option>
                                <option value="tennis court">Tennis Court</option>
                            </select>
                        </div>
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="status">Status</label>
                        <div class="col-sm-10">
                            <select class="custom-select" id="status">
                                <option selected>Choose...</option>
                                <option value="gym">Working</option>
                                <option value="washing machine">Not Working</option>
                                <option value="pool">Under Repair</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="notes">Notes</label>
                        <textarea className="form-control" id="notes" rows="3"></textarea>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button type="submit" class="btn btn-success">Save</button>
                        </div>
                        <div className="col-sm-1">
                            <button type="submit" class="btn btn-danger">Delete</button>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = state => ({
    // faciltiy: state.failityReducer.facility
})

const propertyToDispatchMapper = dispatch => ({
    getFacilityById: facilityId => getFacilityById(dispatch, facilityId),
    updateFacility: facility => updateFacility(dispatch, facility)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (FacilityEditorComponent)