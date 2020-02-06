import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom'
// import ReactMuter from "../Components/ReactMuter";
import { connect } from "unistore/react";
import { actions } from "../store/store";
// import component
import BottomNav from "../Components/BottomNav"
import AppBar from "../Components/AppBar";
import TableTransaction from "../Components/TableTransaction";
// material ui
import { Button, Grid } from "@material-ui/core";


class Home extends Component {

  componentDidMount = async () => {
    console.log('masuk did mount',this.props)
    await this.props.initializeLiff()
    const { profile } = await this.props
    console.log('profile detail', profile)
    await this.props.getUserTransactions(profile.userId)
    
  }

  render() {
    console.log(this.props.userId)
    console.log(this.props.displayName)
    console.log(this.props.pictureUrl)
    console.log(this.props.statusMessage)
    return (
      <Fragment>
        <AppBar />
        <TableTransaction />>
        <Grid
          container
          direction="row"
          justify="space-evenly"
          alignItems="center"
          style={{marginTop: "1em"}}
        >
          <Button variant="contained" color="primary" id="liffLoginButton" onClick={this.props.handleLoginLine}>Login</Button>
          <Button variant="contained" color="secondary" id="liffLogoutButton" onClick={this.props.handleLogoutLine}>Logout</Button>
        </Grid>
        <div class="buttonGroup">
          <p>
            {this.props.userId}
            {this.props.displayName}
            {this.props.pictureUrl}
            {this.props.statusMessage}
          </p>
        </div>
        <BottomNav />
      </Fragment>
    )
  }
}

export default connect('isLoggedIn, userId, displayName, pictureUrl, statusMessage', actions) (withRouter(Home));