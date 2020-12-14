import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom'
import {deleteFacility, getFacilityById, updateFacility} from "../../actions/facilityActions";

class FacilityEditorComponent extends React.Component {
    state = {}

    constructor(props) {
        super(props);
        this.state.facility = props.facility
        const facilityId = this.props.match.params.facilityId
        this.props.getFacilityById(facilityId)
                // .then(console.log(this.state.facility))
    }

    componentDidMount() {
        this.props.getFacilityById(this.props.match.params.facilityId)
            .then(() => this.setState({facility: this.props.facility}))
        
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
                            <select class="custom-select" id="facilityType"
                                    value={this.state.facility.type}
                                    onChange={event => {
                                        this.setState(prevState => {
                                            return {
                                                facility: {
                                                    ...prevState.facility,
                                                    type: event.target.value
                                                }
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
                    </div>
                    <div class="form-group row">
                        <label class="col-sm-2 col-form-label" for="status">Status</label>
                        <div class="col-sm-10">
                            <select class="custom-select" id="status"
                                    value={this.state.facility.status}
                                    onChange={event => {
                                        this.setState(prevState => {
                                            return {
                                                facility: {
                                                    ...prevState.facility,
                                                    status: event.target.value
                                                }
                                            }
                                        })
                                    }}>
                                <option selected>Choose...</option>
                                <option value="working">Working</option>
                                <option value="not working">Not Working</option>
                                <option value="under repair">Under Repair</option>
                            </select>
                        </div>
                    </div>
                    <div className="form-group">
                        <label for="notes">Notes</label>
                        <textarea className="form-control" id="notes" rows="3"
                                  value={this.state.facility.notes}
                                  onChange={event => {
                                      this.setState(prevState => {
                                          return {
                                              facility: {
                                                  ...prevState.facility,
                                                  notes: event.target.value
                                              }
                                          }
                                      })
                                  }}/>
                    </div>
                    <div className="form-group row">
                        <div className="col-sm-11">
                            <button type="submit" class="btn btn-success"
                            onClick={() => this.props.updateFacility(this.state.facility)}>Save</button>
                        </div>
                        <div className="col-sm-1">
                            <Link type="submit" class="btn btn-danger"
                            to={'/admin'}
                            onClick={() => this.props.deleteFacility(this.props.match.params.facilityId)}>Delete</Link>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}

const stateToPropertyMapper = state => ({
    facility: state.facilityReducer.facility
})

const propertyToDispatchMapper = dispatch => ({
    getFacilityById: facilityId => getFacilityById(dispatch, facilityId),
    updateFacility: facility => updateFacility(dispatch, facility),
    deleteFacility: facilityId => deleteFacility(dispatch, facilityId)
})

export default connect
    (stateToPropertyMapper, propertyToDispatchMapper)
    (FacilityEditorComponent)
