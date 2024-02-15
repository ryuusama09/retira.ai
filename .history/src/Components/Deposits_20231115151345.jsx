import * as React from 'react';
import Link from '@mui/material/Link';
import Typography from '@mui/material/Typography';
// import Title from './Title';
import { styled, createTheme, ThemeProvider } from '@mui/material/styles';
import GaugeChart from './GaugeChart';


function preventDefault(event) {
  event.preventDefault();
}
const Title = styled(Typography)(({ theme }) => ({
  fontSize: "13px",
  color: "#042A57",
  fontWeight: "bold",
  textAlign: "left",
  margin: theme.spacing(4, 0, 4, 0),
  [theme.breakpoints.down("sm")]: {
    fontSize: "20px",
  },
}))
export default function Deposits() {
  return (
    <React.Fragment>
<Title variant="h4" sx={{color: "#042A57"}}>
RETIREMENT SAVINGS PROGRESS 
            </Title>
      {/* <Title>Recent Deposits</Title> */}
      <Typography component="p" variant="h4">
        $3,024.00
      </Typography>
      <Typography color="text.secondary" sx={{ flex: 1 }}>
        on 15 March, 2019
      </Typography>
      <div>
      <GaugeChart/>
        <Link color="primary" href="#" onClick={preventDefault}>
          View balance
        </Link>
      </div>
    </React.Fragment>
  );
}