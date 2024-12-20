import React from "react";
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const DisplayInterest = (data) => {
  console.log('data', data);
  if (!data || data.length === 0) return null;

  return (
    <Box
      sx={{
        marginTop: "20px",
        padding: "10px",
        backgroundColor: "#e3f2fd",
        borderRadius: "8px",
      }}
    >
      <Typography variant="h6" gutterBottom>
        Display Interest
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Total Months</strong></TableCell>
              <TableCell align="right"><strong>Extra Days</strong></TableCell>
              <TableCell align="right"><strong>Principal Amount (₹)</strong></TableCell>
              <TableCell align="right"><strong>Interest Amount (₹)</strong></TableCell>
              <TableCell align="right"><strong>Total Amount (₹)</strong></TableCell>
              <TableCell align="right"><strong>Interest Per Month (₹)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow key={1}>
              <TableCell>{data.totalMonths}</TableCell>
              <TableCell>{data.totalDays}</TableCell>
              <TableCell align="right">{data.principal}</TableCell>
              <TableCell align="right">{data.interestAmount}</TableCell>
              <TableCell align="right">{data.totalAmount}</TableCell>
              <TableCell align="right">{data.interestPerMonth}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default DisplayInterest;
