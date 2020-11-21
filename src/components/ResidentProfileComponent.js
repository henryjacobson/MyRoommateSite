import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class ResidentProfileComponent extends React.Component{

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return(
            <div>
                <h3>{this.state.loggedOnResident}</h3>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
    loggedOnResident: state.residentReducer.loggedOnResident
})
const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(ResidentProfileComponent)
