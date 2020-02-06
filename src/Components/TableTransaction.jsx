import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../store/store'
import { withRouter } from 'react-router-dom'
import { TableBody, TableCell, Table, TableContainer, TableRow, TableHead, Grid } from '@material-ui/core'
import RowTable from './RowTable'



const TableTransaction = (props) => {
  const loopRow = props.listTransactions.map((item, key) => {
    let iconChangeColor = false
    if (item.payment_status === item.order_status) {
      iconChangeColor = true
    }
    console.log(item)
    return (
      <RowTable 
        key={key}
        phoneNumber={item.phone_number}
        nominal={item.nominal}
        iconChangeColor={iconChangeColor}
      />
      )    
  })
  return (
    <Grid container style={{maxWidth:"100vw"}}>
      <Grid item xs={12}>
          <TableContainer>
            <Table stickyHeader>
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
          </TableContainer>
        </Grid> 
    </Grid>
  )
}

export default connect('isLoggedIn, listTransactions', actions )(withRouter(TableTransaction))