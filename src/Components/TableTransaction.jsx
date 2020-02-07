import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../store/store'
import { withRouter } from 'react-router-dom'
import { TableBody, TableCell, Table, TableContainer, TableRow, TableHead, Grid, makeStyles, GridList, Typography } from '@material-ui/core'
import RowTable from './Loop/RowTable'

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
        changeIcon={changeIcon}
        colorIcon={colorIcon}
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
      {/* <Grid item xs={12}> */}
        <Grid item xs={3}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center"}}>
            Status
          </Typography>
        </Grid>
        <Grid item xs={5}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center"}}>
            Nomor
          </Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography variant="subtitle1" className={classes.padding} style={{textAlign: "center"}}>
            Nominal
          </Typography>
        </Grid>
          {loopRow}
          {/* <TableContainer style={{border:'0'}}>
            <Table stickyHeader style={{border:'0'}} >
              <TableHead>
                <TableRow>
                  <TableCell size="small" align="center" >Status</TableCell>
                  <TableCell size="small" align="center" >Nomor</TableCell>
                  <TableCell size="small" align="center"> Nominal</TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {loopRow}
              </TableBody>
            </Table>
          </TableContainer> */}
        {/* </Grid>  */}
    </Grid>
  )
}

export default connect('isLoggedIn, listTransactions', actions)(withRouter(TableTransaction))