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
                <h1>Privacy Policy</h1>
                <p>
                    This website employs very few security measures. Proceed with caution.
                </p>
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
