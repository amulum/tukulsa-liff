import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom'
import ReactMuter from "../Components/ReactMuter";
import { connect } from "unistore/react";
import { actions } from "../store/store";


class Home extends Component {

  handleLoginLine = () => {
    if (!window.liff.isLoggedIn()) {
      // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
      window.liff.login();
    }
  }
  handleLogoutLine = () => {
    if (window.liff.isLoggedIn()) {
      window.liff.logout();
      window.location.reload();
    }
  }
  componentDidMount = async () => {
    console.log(this.props)
    if (window.liff.isLoggedIn()) {
      await this.props.initializeLiff()
      const { profile } = await this.props
      console.log('profile detail', profile)
    }
  }

  render() {
    console.log(this.props.profile)
    return (
      <Fragment>
        <ReactMuter />
        <div class="buttonGroup">
                <button id="liffLoginButton" onClick={this.handleLoginLine}>Log in</button>
                <button id="liffLogoutButton"onClick={this.handleLoginLine}>Log out</button>
            </div>
      </Fragment>
    )
  }
}

export default connect('profile', actions) (withRouter(Home));