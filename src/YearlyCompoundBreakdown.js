import React from "react";
import { Box, Typography, TableContainer, Table, TableHead, TableRow, TableCell, TableBody } from "@mui/material";

const YearlyCompoundBreakdown = ({ data }) => {
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
        Yearly Compound Interest Breakdown
      </Typography>
      <TableContainer>
        <Table size="small">
          <TableHead>
            <TableRow>
              <TableCell><strong>Year</strong></TableCell>
              <TableCell align="right"><strong>Interest (₹)</strong></TableCell>
              <TableCell align="right"><strong>Total Amount (₹)</strong></TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => (
              <TableRow key={row.year}>
                <TableCell>{row.year}</TableCell>
                <TableCell align="right">{row.interest}</TableCell>
                <TableCell align="right">{row.total}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Box>
  );
};

export default YearlyCompoundBreakdown;
