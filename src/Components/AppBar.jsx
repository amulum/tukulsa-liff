import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import { connect, actions } from 'unistore/react';
import { withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import { Skeleton } from '@material-ui/lab';

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: '#d9e9e9'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    textAlign: 'center',
    color : '#2c6553',
    padding: 0
  },
  hello : {
    textAlign: 'right',
    color: '#2c6553'
  },
  wrapName : {
    display: "flex",
    flexDirection: "row",
    justifyContent: "flex-end"
  }
}));

function MenuAppBar(props) {
  const classes = useStyles();
  // const [auth] = React.useState(true);
  // const [anchorEl, setAnchorEl] = React.useState(null);
  // const open = Boolean(anchorEl);

  // const handleChange = event => {
  //   setAuth(event.target.checked);
  // };

  // const handleMenu = event => {
  //   setAnchorEl(event.currentTarget);
  // };

  // const handleClose = () => {
  //   setAnchorEl(null);
  // };

  return (
    <Fragment>
      <AppBar position="static" className={classes.root}>
        <Toolbar>
          <Grid container alignItems="center" spacing={2} style={{marginTop:"0.5%"}}>
            <Grid item xs={10} className={classes.wrapName}>
              {props.isLoading?
                <Skeleton animation="wave" width="40%" className={classes.hello} height={40} />
                : 
                <Typography className={classes.hello}>
                  Hallooohhh, {props.displayName}
                </Typography>
              }
            </Grid>
            <Grid item xs={2} alignItems="ce">
              {props.isLoading?
                <Skeleton animation="wave" variant="circle" height={40} width={40}/>
              :
                <Avatar alt="cobain" src={`${props.pictureUrl}`} />
              }
            </Grid>
            {/* logo tukulsa */}
            <Grid item xs={12} justify="center" style={{padding: 0}}>
              <Typography variant="h6" className={classes.title} bold>
                RIWAYAT TRANSAKSI
              </Typography>
            </Grid>
            <Grid container xs={12} justify="center">
                <img src={require("../images/tukulsalogo-bg-none.png")} alt="tukulsalogo" style={{maxWidth:"80%", maxHeight:"40%", marginBottom:"0.5em"}}/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
export default connect('isLoggedIn, displayName, pictureUrl, isLoading', actions)(withRouter(MenuAppBar))