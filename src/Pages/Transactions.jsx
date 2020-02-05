import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import { connect } from "unistore/react";
import { actions } from "../store/store";

class Transactions extends Component {
  render() {
    return (
      <div></div>
    )
  }
}

export default connect("username, password", actions)(withRouter(Transactions));