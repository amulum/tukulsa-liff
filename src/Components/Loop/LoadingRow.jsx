import React, { Fragment } from 'react'
import { withRouter } from 'react-router-dom'
import { Skeleton } from '@material-ui/lab'
import { Grid, makeStyles } from '@material-ui/core'

const LoadingRow = (props) => {
  const useStyles = makeStyles({
    cell : {
      fontSize: "3em",
      width: "80%",
      display: "flex",
      justifyContent: "center"
    }
  })
  const classes = useStyles()
  return (
    <Fragment >
    <Grid container justify="center" alignItems="center">
        <Grid item xs={3} className={classes.cell}>
          <Skeleton width="80%"/>
        </Grid>
        <Grid item xs={5} className={classes.cell}>
          <Skeleton width="80%" />
        </Grid>
        <Grid item xs={4} className={classes.cell}>
          <Skeleton width="80%" />
        </Grid>
      </Grid>
    </Fragment>
  )
}
export default (withRouter(LoadingRow))
