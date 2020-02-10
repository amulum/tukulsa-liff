import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../../store/store'
import { withRouter } from 'react-router-dom'
import { makeStyles, Grid, Typography, Button } from '@material-ui/core'
// ICONS
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

function RowTable (props)  {
  const useStyles = makeStyles(theme => ({
    status : {
      color : `${props.colorIcon}`,
      padding : '0.6em'
    },
    padding : {
      padding : '0.6em',
      fontWeight: '500'
    },
    selectedTrx : {
      backgroundColor : ''
    }
  }));
  const classes = useStyles();
  const message = `cek transaksi ${props.orderId}`
  return (
    <Button fullWidth onClick={() => props.getDetails(message)} className={classes.selectedTrx} variant="contained">
        <Grid item xs={3} className={classes.status} style={{textAlign: "center"}} >
          {props.changeIcon? <CheckCircleIcon /> : <CancelIcon />}
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center", alignItems:"center"}}>
            {props.phoneNumber}
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center"}}>
            {props.nominal}
          </Typography>
      </Grid>
    </Button>
  )
}

export default connect('isLoggedIn, listTransactions, userId, displayName', actions)(withRouter(RowTable))