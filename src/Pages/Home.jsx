import React, { Component } from "react";
import { withRouter } from 'react-router-dom'
import ReactMuter from "../Components/ReactMuter";


class Home extends Component {
  render() {
    return (
      <ReactMuter />
    )
  }
}

export default (withRouter(Home));