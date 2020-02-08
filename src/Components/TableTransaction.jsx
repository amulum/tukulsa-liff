import React, { Fragment } from 'react'
import { connect } from 'unistore/react'
import { actions } from '../store/store'
import { withRouter } from 'react-router-dom'
import { Grid, makeStyles, Typography, Button } from '@material-ui/core'
import RowTable from './Loop/RowTable'
import LoadingRow from './Loop/LoadingRow'

const useStyles = makeStyles(theme => ({
  padding : {
    padding : '0.6em'
  },
}));

const TableTransaction = (props) => {
  const classes = useStyles()
  const loopRow = props.listTransactions.map((item, key) => {
    let changeIcon = false
    if (item.payment_status === "LUNAS" && item.order_status === 'SUKSES') {
      changeIcon = true
    }
    const colorIcon = changeIcon? 'green' : 'red'
    return (
      <RowTable 
        key={key}
        phoneNumber={item.phone_number}
        nominal={item.nominal}
        orderId={item.order_id}
        changeIcon={changeIcon}
        colorIcon={colorIcon}
        getDetails={props.getDetails}
      />
      )    
  })
  return (
    <Grid style={{maxWidth:"100vw"}}
      container
      direction="row"
      justify="center"
      alignItems="center"
    >
      <Button fullWidth style={{backgroundColor:"#459a90"}}>
        <Grid item xs={3}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center", fontWeight:'600'}}>
            Status
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center", fontWeight:'600'}}>
            Nomor
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center", fontWeight:'600'}}>
            Nominal
          </Typography>
        </Grid>
      </Button>
      {props.isLoading?
      <Fragment >
        <LoadingRow />
        <LoadingRow />
        <LoadingRow />
      </Fragment>
      : 
        loopRow
      }
    </Grid>
  )
}

export default connect('isLoading, isLoggedIn, listTransactions', actions)(withRouter(TableTransaction))