import React, { Fragment } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../../store/store'
import { withRouter } from 'react-router-dom'
import { TableRow, TableCell, makeStyles, Grid, Typography } from '@material-ui/core'
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
      padding : '0.6em'
    },
  }));
  const classes = useStyles();
  return (
      <Fragment>
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
    </Fragment>
  //   <TableRow >
  //     <TableCell size="small" align="center" className={classes.status}>  </TableCell>
  //     <TableCell size="small" align="center">{props.phoneNumber}</TableCell>
  //     <TableCell size="small" align="center">{props.nominal}</TableCell>
  // </TableRow>
  )
}

export default connect('isLoggedIn, listTransactions', actions)(withRouter(RowTable))