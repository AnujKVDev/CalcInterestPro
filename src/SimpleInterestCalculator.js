import React, { useState } from "react";
import {
  Box,
  TextField,
  Button,
  Typography,
  Paper,
  Grid,
  Radio,
  RadioGroup,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputAdornment,
} from "@mui/material";
import dayjs from "dayjs";
import { principalInWords, displayFormattedDate } from "./utility";
import YearlyCompoundBreakdown from "./YearlyCompoundBreakdown";
import DisplayInterest from "./DisplayInterest";

const InterestCalculator = () => {
  const [calculationType, setCalculationType] = useState("simple"); // "simple" or "compound"
  const [principal, setPrincipal] = useState("");
  const [startDate, setStartDate] = useState("");
  const [interest, setInterest] = useState(null);
  const [totalMonths, setTotalMonths] = useState(null);
  const [totalDays, setTotalDays] = useState(null);
  const [totalAmount, setTotalAmount] = useState(null);
  const [interestPerMonth, setInterestPerMonth] = useState(null);
  const [yearlyCompoundData, setYearlyCompoundData] = useState([]);

  const calculateInterest = (e) => {
    e.preventDefault();

    const P = parseFloat(principal);
    const start = dayjs(startDate);
    const today = dayjs();

    if (isNaN(P) || !start.isValid()) {
      alert("Please enter a valid principal and date.");
      return;
    }

    // Calculate total months between start date and today
    const months = today.diff(start, "month");
    const days = today.diff(start.add(months, "month"), "day");
    setTotalDays(days);

    if (months < 0) {
      alert("Start date cannot be in the future.");
      return;
    }

    const rate = 2; // 2% per month
    setInterestPerMonth((P * rate) / 100);

    if (calculationType === "simple") {
      // Simple Interest
      const simpleInterest = (P * rate * months) / 100;
      setInterest(simpleInterest);
      setTotalMonths(months);
      setTotalAmount(P + simpleInterest);
      setYearlyCompoundData([]); // Clear compound data for simple interest
    } else if (calculationType === "compound") {
      // Compound Interest
      const compoundInterest = P * Math.pow(1 + rate / 100, months) - P;
      setInterest(compoundInterest);
      setTotalMonths(months);
      setTotalAmount(P + compoundInterest);

      // Calculate year-wise breakdown
      const yearlyData = [];
      let amount = P;
      for (let year = 1; year <= Math.floor(months / 12); year++) {
        const yearEndAmount = amount * Math.pow(1 + rate / 100, 12);
        const yearlyInterest = yearEndAmount - amount;
        yearlyData.push({ year, interest: yearlyInterest.toFixed(2), total: yearEndAmount.toFixed(2) });
        amount = yearEndAmount;
      }
      setYearlyCompoundData(yearlyData);
    }
  };

  const resetForm = () => {
    setPrincipal("");
    setStartDate("");
    setInterest(null);
    setTotalMonths(null);
    setTotalAmount(null);
    setYearlyCompoundData([]);
  };

  return (
    <Paper
      elevation={3}
      sx={{
        maxWidth: 500,
        margin: "40px auto",
        padding: "20px",
        borderRadius: "10px",
      }}
    >
      <Typography variant="h4" align="center" gutterBottom>
        Interest Calculator
      </Typography>
      <Box
        component="form"
        onSubmit={calculateInterest}
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
        }}
      >
        <FormControl component="fieldset">
          <FormLabel component="legend">Calculation Type</FormLabel>
          <RadioGroup
            row
            value={calculationType}
            onChange={(e) => setCalculationType(e.target.value)}
          >
            <FormControlLabel
              value="simple"
              control={<Radio />}
              label="Simple Interest"
            />
            <FormControlLabel
              value="compound"
              control={<Radio />}
              label="Compound Interest"
            />
          </RadioGroup>
        </FormControl>
        <TextField
          label="Principal (₹)"
          type="number"
          value={principal}
          onChange={(e) => setPrincipal(e.target.value)}
          fullWidth
          required
          helperText={principal ? principalInWords(Number(principal)) : ""}
          InputProps={{
            startAdornment: <InputAdornment position="start">₹</InputAdornment>,
          }}
        />
        <TextField
          label="Start Date"
          type="date"
          InputLabelProps={{ shrink: true }}
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          fullWidth
          required
          helperText={startDate ? displayFormattedDate(startDate) : ""}
        />
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Button variant="contained" type="submit" color="primary">
              Calculate
            </Button>
          </Grid>
          <Grid item>
            <Button
              variant="outlined"
              type="button"
              color="secondary"
              onClick={resetForm}
            >
              Reset
            </Button>
          </Grid>
        </Grid>
      </Box>
      {interest !== null && (
        <Box
          sx={{
            marginTop: "20px",
            padding: "10px",
            backgroundColor: "#f9f9f9",
            borderRadius: "8px",
            textAlign: "justify",
          }}
        >
          <Typography variant="body1">
            Calculation Type <strong>{calculationType === "simple" ? "Simple Interest" : "Compound Interest"}</strong>
          </Typography>
          <Typography variant="body1">
            Total Months <strong>{totalMonths}</strong>
          </Typography>
          <Typography variant="body1">
            Extra Days <strong>{totalDays}</strong>
          </Typography>
          <Typography variant="body1">
            Principal Amount <strong>₹{principal}</strong>
          </Typography>
          <Typography variant="body1">
            Interest Amount <strong>₹{interest.toFixed(2)}</strong>
          </Typography>
          <Typography variant="body1">
            Total Amount <strong>₹{totalAmount.toFixed(2)}</strong>
          </Typography>
          <Typography variant="body1">
            Interest Per Month <strong>₹{interestPerMonth}</strong>
          </Typography>
        </Box>
      )}

      {/* <DisplayInterest totalMonths={totalMonths} totalDays={totalDays} principal={principal} interestAmount={interest} totalAmount={totalAmount} interestPerMonth={interestPerMonth} /> */}

      <YearlyCompoundBreakdown data={yearlyCompoundData} />
    </Paper>
  );
};

export default InterestCalculator;
