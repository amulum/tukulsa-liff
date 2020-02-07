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
import ReactMuter from "../Components/ReactMuter";


class Home extends Component {
  state = {
    userId : ''
  }
   
  componentDidMount = async () => {
    console.log('1')
    await this.props.initializeLiff()
    console.log('atas7 masuk did mount',this.props)
    await this.setState({userId : this.props.userId})
  }
  
  componentWillReceiveProps = async () => {
    console.log('7')
    console.log('sblm masuk if userId', this.state.userId)
    await this.props.getUserTransactions(this.state.userId);
  }
  render() {
    console.log('di render', this.props.userId)
    console.log('di render',this.props.displayName)
    console.log('di render',this.props.pictureUrl)
    console.log('di render',this.props.statusMessage)
    return (
      <Fragment>
        {/* <ReactMuter /> */}
        <AppBar />
        <p>{this.props.userId}</p>
        <TableTransaction />
        {this.props.isLoggedIn?
        null
        :
        <Fragment >

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
        </Fragment>
        }
        <BottomNav />
      </Fragment>
    )
  }
}

export default connect('isLoggedIn, userId, displayName, pictureUrl, statusMessage', actions) (withRouter(Home));