import React, { Fragment } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import AccountCircle from '@material-ui/icons/AccountCircle';
import { connect, actions } from 'unistore/react';
import { withRouter } from 'react-router-dom'
import { Grid } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    backgroundColor: '#d9e9e9'
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
    textAlign: 'center',
    marginBottom: '10px',
    color : '#2c6553'
  },
  hello : {
    textAlign: 'right',
    color: '#2c6553'
  }
}));

function MenuAppBar(props) {
  const classes = useStyles();
  const [auth] = React.useState(true);
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
          <Grid container alignItems="center">
            <Grid item xs={10} className={classes.hello}>
              <Typography >
                Hi {props.displayName === '' ? 'kamuu' : props.displayName}
              </Typography>
            </Grid>
            <Grid item xs={2}>
              {auth && (
                <div>
                  <IconButton
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    color="inherit"
                  >
                    {props.pictureUrl === ''?
                      <Avatar alt="cobain" src={props.pictureUrl} />
                    :
                      <AccountCircle />
                    }
                  </IconButton>
                </div>
              )}
            </Grid>
            {/* logo tukulsa */}
            <Grid item xs={12} justify="center">
              <Typography variant="h5" className={classes.title}>
                Riwayat Transaksi
              </Typography>
            </Grid>
            <Grid item xs={12} justify="center">
                <img src={require("../images/tukulsalogo-bg-none.png")} alt="tukulsalogo"/>
            </Grid>
          </Grid>
        </Toolbar>
      </AppBar>
    </Fragment>
  );
}
export default connect('isLoggedIn, displayName, pictureUrl', actions)(withRouter(MenuAppBar))