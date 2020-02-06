import React from 'react'
import { connect } from 'unistore/react'
import { actions } from '../store/store'
import { withRouter } from 'react-router-dom'
import { TableBody, TableCell, Table, TableContainer, TableRow, TableHead, Grid } from '@material-ui/core'
import RowTable from './Loop/RowTable'



const TableTransaction = (props) => {
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

export default connect('isLoggedIn, listTransactions', actions)(withRouter(TableTransaction))