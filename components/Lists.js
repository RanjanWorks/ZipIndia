"use client"
import React from 'react'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import Alert from '@mui/material/Alert';
import Stack from '@mui/material/Stack';

const Lists = ({ data }) => {
console.log(data)
if (!data || data.length === 0) {
  return <p></p>;
}
  return (

   <div className='tbl'>
<h2 className='result'>Results</h2>
    <TableContainer component={Paper}>
    <Table  sx={{ minWidth: 650 ,backgroundColor: "#1DEFC5"}} aria-label="simple table">
      <TableHead>
        <TableRow>
          <TableCell align="left">Sn</TableCell>
          <TableCell>Name</TableCell>
          <TableCell align="left">District</TableCell>
          <TableCell align="left">Region</TableCell>
          <TableCell align="left">Pincode</TableCell>
          <TableCell align="left">Division</TableCell>
          <TableCell align="left">State</TableCell>
        </TableRow>
      </TableHead>
      <TableBody>
      {data[0].PostOffice ? (
  data[0].PostOffice.map((office, index) => (
    <TableRow
      key={index}
      sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
    >
      <TableCell align="left">{index + 1}</TableCell>
      <TableCell component="th" scope="row">
        {office.Name}
      </TableCell>
      <TableCell align="left">{office.District}</TableCell>
      <TableCell align="left">{office.Region}</TableCell>
      <TableCell align="left">{office.Pincode}</TableCell>
      <TableCell align="left">{office.Division}</TableCell>
      <TableCell align="left">{office.State}</TableCell>
    </TableRow>
  ))
) : (
  <TableRow>
    <TableCell colSpan={7} align="center">No data available</TableCell>
  </TableRow>
)}

      </TableBody>
    </Table>
  </TableContainer>
       
        </div>
  )
}

export default Lists
