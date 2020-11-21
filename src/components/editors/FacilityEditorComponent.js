import React from 'react';
import { connect } from 'react-redux';
import { getFacilityById, updateFacility } from "../../actions/facilityActions";

class FacilityEditorComponent extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.facility = props.facility
    }

    componentDidMount() {
        const facilityId = this.props.match.params.facilityId
        this.props.getFacilityById(facilityId)
            .then(_ => this.setState({ facility: this.props.faciltiy }))
    }

    render() {
        return (
            <div>
                <h1>
                    Facility Editor - 
                    {/* {this.props.facility.title} */}
                </h1>
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