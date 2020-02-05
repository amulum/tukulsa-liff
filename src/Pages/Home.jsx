import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom'
import ReactMuter from "../Components/ReactMuter";
import { connect } from "unistore/react";
import { actions } from "../store/store";


class Home extends Component {

  handleLoginLine = async ()  => {
    const liff = await window.liff
    if (!this.props.isLoggedIn) {
      // set `redirectUri` to redirect the user to a URL other than the front page of your LIFF app.
      await liff.login();
    }
  }
  handleLogoutLine = async ()  => {
    const liff = await window.liff
    if (this.props.isLoggedIn) {
      await liff.logout();
      window.location.reload();
    }
  }
  componentDidMount = async () => {
    console.log('masuk did mount',this.props)
    await this.props.initializeLiff()
    const { profile } = await this.props
    console.log('profile detail', profile)
    
  }

  render() {
    console.log(this.props.profile)
    console.log(this.props.profile.userId)
    console.log(this.props.profile.displayName)
    console.log(this.props.profile.pictureUrl)
    console.log(this.props.profile.statusMessage)
    return (
      <Fragment>
        <div class="buttonGroup">
                <button id="liffLoginButton" onClick={this.handleLoginLine}>Log in</button>
                <button id="liffLogoutButton"onClick={this.handleLoginLine}>Log out</button>
                <p>
                  {this.props.profile.userId}
                  {this.props.profile.displayName}
                  {this.props.profile.pictureUrl}
                  {this.props.profile.statusMessage}
                </p>
            </div>
        <ReactMuter />
      </Fragment>
    )
  }
}

export default connect('isLoggedIn, profile', actions) (withRouter(Home));