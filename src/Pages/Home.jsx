import React, { Component, Fragment } from "react";
import { withRouter } from 'react-router-dom'
// import ReactMuter from "../Components/ReactMuter";
import { connect } from "unistore/react";
import { actions, store } from "../store/store";
// import component
import AppBar from "../Components/AppBar";
import TableTransaction from "../Components/TableTransaction";
// material ui
import { Button, Grid } from "@material-ui/core";


class Home extends Component {
   
  componentDidMount = async () => {
    console.log('1')
    await this.props.initializeLiff()
    console.log('atas7 masuk did mount',this.props)
  }
  handleSendMessage = async (messages) => {
    console.log('masuk handle send message', messages)
    await this.props.sendMessages(messages)
    await this.props.closeWindow()
  }
  render() {
    console.log('di render', this.props.userId)
    console.log('di render',this.props.displayName)
    console.log('di render',this.props.pictureUrl)
    console.log('di render',this.props.statusMessage)
    if (this.props.userId === '') {
      console.log('masuk if none')
      this.props.getUserTransactions('U0c42265e3ba13d4583bfdb21fbd22cf4')
    } else {
      console.log('masuk else')
      this.props.getUserTransactions(this.props.userId)
    }

    return (
      <Fragment>
        {/* <ReactMuter /> */}
        <AppBar />
        <TableTransaction 
          getDetails={this.handleSendMessage}
        />
        {this.props.isInClient?
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
        </Fragment>
        }
      </Fragment>
    )
  }
}

export default connect('isLoading, isLoggedIn, userId, displayName, pictureUrl, statusMessage, isInClient', actions) (withRouter(Home));