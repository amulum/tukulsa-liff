import React from 'react'
import { TableRow, TableCell, makeStyles } from '@material-ui/core'
// ICONS
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import CancelIcon from '@material-ui/icons/Cancel';

const successColor = (iconChangeColor) => {
  if (iconChangeColor) {
    return 'green'
  } else {
    return 'red'
  }
}

export default function RowTable (props)  {
  const useStyles = makeStyles(theme => ({
    status : {
      color : `${successColor()}`
    }
  }));

  const classes = useStyles();
  const successIcon = (iconChangeColor)=> {
    if (iconChangeColor) {
      return <CheckCircleIcon />
    } else {
      return <CancelIcon />
    }
  }

  return (
    <TableRow>
      <TableCell size="small" align="center" className={classes.status}> {successIcon()} </TableCell>
      <TableCell size="small" align="center">08123123123</TableCell>
      <TableCell size="small" align="center">10000</TableCell>
  </TableRow>
  )
}