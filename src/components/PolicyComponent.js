import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class PolicyComponent extends React.Component{

    componentDidMount() {

    }

    componentDidUpdate(prevProps, prevState, snapshot) {
    }

    render() {
        return(
            <div>
                <h1>Policy Temp</h1>
            </div>
        )
    }
}

const stateToProperty = (state) => ({
})
const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(PolicyComponent)
