import React from "react";
import Link from "@material-ui/core/Link";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import Title from "./Title";
import Box from "@material-ui/core/Box";
import { Button } from "@material-ui/core";
import './Deposits.css';
function preventDefault(event) {
  event.preventDefault();
}

const useStyles = makeStyles({
  depositContext: {
    flex: 1,
  },
  text:{
    fontSize:"4rem",
  },
  btn:{
     padding:"16px",
     alignmentBaseline:"baseline",
     backgroundColor:"#2F80ED",
     color:"white"
  },
  topText:{
      bottom:"6rem",
      position:"relative",
      fontWeight:"bold"
  },constainer:{
    display:"flex",
    flexDirection:"row",
  }
});

export default function Deposits() {
  const classes = useStyles();
  return (
    <React.Fragment>
      <Box className={classes.container} >
    <div class="text-container">
      <Title>Current Balance</Title>
      <Typography component="p" variant="h4"  className={classes.text}>
        ₹3,024.00
      </Typography>
      <Typography color="textSecondary" className={classes.depositContext}>
        on 15 March, 2019
      </Typography>
      </div>

      <div class="text-bottom">
      <Typography component="p" className={classes.topText} >
        % change of Amount
      </Typography>
        <Link color="secondary" href="#" onClick={preventDefault}>
          <Button className={classes.btn} variant="contained">Add more amount</Button>
        </Link>
      </div>
      </Box>
    </React.Fragment>
  );
}
