import React from "react";
import {connect} from "react-redux";
import {Link} from "react-router-dom";

class AdminProfileComponent extends React.Component{

  componentDidMount() {

  }

  componentDidUpdate(prevProps, prevState, snapshot) {
  }

  render() {
    return(
        <div>
            <h3>{this.state.loggedOnAdmin}</h3>
        </div>
    )
  }
}

const stateToProperty = (state) => ({
    loggedOnAdmin: state.adminReducer.loggedOnAdmin
})
const propertyToDispatchMapper = (dispatch) => ({
})

export default connect
(stateToProperty, propertyToDispatchMapper)
(AdminProfileComponent)
