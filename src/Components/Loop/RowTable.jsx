import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../../store/store'
import { withRouter } from 'react-router-dom'
import { TableRow, TableCell, makeStyles } from '@material-ui/core'
// ICONS
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

function RowTable (props)  {
  const useStyles = makeStyles(theme => ({
    status : {
      color : `${props.colorIcon}`
    }
  }));
  const classes = useStyles();
  return (
    <TableRow>
      <TableCell size="small" align="center" className={classes.status}> {props.changeIcon? <CheckCircleIcon /> : <CancelIcon />} </TableCell>
      <TableCell size="small" align="center">{props.phoneNumber}</TableCell>
      <TableCell size="small" align="center">{props.nominal}</TableCell>
  </TableRow>
  )
}

export default connect('isLoggedIn, listTransactions', actions)(withRouter(RowTable))