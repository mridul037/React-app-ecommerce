import React from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Paper from "@material-ui/core/Paper";
import Link from "@material-ui/core/Link";
import Chart from "./../elements/Chart";
import Deposits from "./../elements/Deposits";
import TopMenu from "./../elements/Appbar";
import StockCards from "../elements/StockCards";
import PieCharts from "../elements/PieChart";
import { Button } from "@material-ui/core";
//import Skeleton from '@material-ui/lab/Skeleton';

import './Dashboard.css';

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Techolics Products Pvt Ltd
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
  },
  toolbarIcon: {
    display: "flex",
    alignItems: "center",
    justifyContent: "flex-end",
    padding: "0 8px",
    ...theme.mixins.toolbar,
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    transition: theme.transitions.create(["width", "margin"], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  menuButtonHidden: {
    display: "none",
  },
  title: {
    flexGrow: 1,
  },
  drawerPaper: {
    position: "relative",
    whiteSpace: "nowrap",
    width: drawerWidth,
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerPaperClose: {
    overflowX: "hidden",
    transition: theme.transitions.create("width", {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    width: theme.spacing(7),
    [theme.breakpoints.up("sm")]: {
      width: theme.spacing(9),
    },
  },
  appBarSpacer: theme.mixins.toolbar,
  content: {
    flexGrow: 1,
    height: "100vh",
    overflow: "auto",
  },
  container: {
    paddingTop: theme.spacing(4),
    paddingBottom: theme.spacing(4),
    
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    // overflow: "auto",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 240,
  },
  headerGraph:{
     height:260,
  },
  cardRow:{
    display:"flex",
    justifyContent:"space-between+"
  },
  headingContext:{
    textAlign:"left",
    fontWeight:"bold",
    fontSize:"1.4rem"
  }
}));

export default function Dashboard() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const fixedHeaderGraph=clsx(classes.paper,classes.headerGraph)
 
  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar
        position="absolute"
        className={clsx(classes.appBar, open && classes.appBarShift)}
      >
        <TopMenu className={classes.toolbar} />
      </AppBar>
      <main className={classes.content}>
        <div className={classes.appBarSpacer} />
        {/*  */}
        <Container maxWidth="lg" className={classes.container }>
        <Grid container spacing={2}>
        
          <Grid item xs={18} md={8} lg={6}>
              <Paper className={fixedHeaderGraph}>
                <Chart />
              </Paper>
          </Grid>
          <Grid item xs={18} md={8} lg={6}>
          <Paper className={fixedHeaderGraph}>
                <Deposits />
          </Paper>
          </Grid>
          </Grid>
        </Container>

        {/*  */}
        
        <Container maxWidth="lg" className={classes.container}>
        <Typography color="textSecondary" className={classes.headingContext}>
        Trending Stocks
        </Typography>
        <div class="card-container">
            <Grid class="card-row" container spacing={3}>
              <StockCards />
              <StockCards />
              <StockCards />
              <StockCards />
            </Grid>
          </div>
            {/* level 3 */}
       <Typography color="textSecondary" className={classes.headingContext}>
          Best Return Stocks
      </Typography>
          <div class="card-container">
            <Grid class="card-row"  container spacing={3}>
              <StockCards />
              <StockCards />
              <StockCards />
              <StockCards />
            </Grid>
          </div>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
        
      </main>
    </div>
  );
}
