import React from 'react';
import { Box,Grid, Paper, Typography, CircularProgress, LinearProgress } from '@mui/material';
import Chart from './Chart';
const InvestmentsBox = () => (
  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
    <Typography variant="h6">Total Investments</Typography>
    <Typography variant="h4">$120,000</Typography>
    <Typography variant="subtitle1">+ $120 (0.1%)</Typography>
    {/* Options to choose from */}
    <div style={{ display: 'flex', justifyContent: 'space-around', marginTop: '20px' }}>
      <div>
        <Typography variant="subtitle2">1 Day</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">1 Month</Typography>
      </div>
      <div>
        <Typography variant="subtitle2">1 Year</Typography>
      </div>
    </div>
    {/* Chart (replace with your actual chart component) */}
    <div style={{ marginTop: '20px', width: '100%', height: '150px', backgroundColor: '#f0f0f0' }}>
      {/* Replace this div with your actual chart component */}
      <div style={{ width: '100%', height: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
        <Chart/>
      </div>
    </div>
  </Paper>
);

// Component for the second box
const EquityMarketsBox = () => (
  <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
    <Typography variant="h6">Equity Markets</Typography>
    <Typography variant="subtitle1">BSE Sensex: 40,000</Typography>
    <Typography variant="subtitle1">Dow Jones: 35,000</Typography>
    <Typography variant="subtitle1">Nasdaq: 15,000</Typography>
    {/* Include date and increase values here */}
  </Paper>
);

// Component for the third box
  // Component for the first box
const ProgressBarBox = ({ title, value }) => {
    let indicatorText = '';
    let color = '';
  
    if (value <= 30) {
      indicatorText = 'Less';
      color = '#BDFF7B';
    } else if (value <= 70) {
      indicatorText = 'Nearby Full';
      color = '#FFE779';
    } else {
      indicatorText = 'Completely Full';
      color = '#FC8965';
    }
  
    return (
      <Grid container>
        <Typography variant="h6" sx={{ mb: 1, color: "#0066FF" }}>
          {title}
        </Typography>
        <LinearProgress
          variant="determinate"
          value={value}
          sx={{
            width: '100%',
            height: '12px',
            borderRadius: '8px',
            backgroundColor: '#f0f0f0',
            marginBottom: '8px',
            '& .MuiLinearProgress-bar': {
              backgroundColor: color,
            },
          }}
        />
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            width: '100%',
          }}
        >
          <Typography variant="body2">{indicatorText}</Typography>
          <Typography variant="body2">{value}%</Typography>
        </Box>
      </Grid>
    );
  };
  
  // Component for the third box
  const CreditScoreBox = () => (
    <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column', alignItems: 'center', position: 'relative' }}>
      <Typography variant="h6">Credit Score Rating</Typography>
      {/* Circular Progress Bar */}
      <div style={{ position: 'relative', width: '80px', height: '80px' }}>
        <CircularProgress variant="determinate" value={75} size={80} />
        {/* Display the percentage in the center of the circular progress bar */}
        <Typography
          variant="h5"
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            color: '#000', // Adjust text color as needed
          }}
        >
          75%
        </Typography>
      </div>
      {/* Include ProgressBarBox with the entire width */}
      <ProgressBarBox title="Expense" value={30} />
    </Paper>
  );
  
// Main component
const YourComponent = () => (
  <Grid container spacing={2} style={{ height: '100vh' }}>
  <Grid item xs={12} md={8}>
    <Grid container spacing={2}>
      <Grid item xs={12} md={6} lg={6}>
        <InvestmentsBox />
      </Grid>
      <Grid item xs={12} md={6} lg={6}>
        <EquityMarketsBox />
      </Grid>
    </Grid>
  </Grid>
  <Grid item xs={12} md={4}>
    <CreditScoreBox />
  </Grid>
</Grid>

);

export default YourComponent;
