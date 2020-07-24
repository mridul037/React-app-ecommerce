import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Link from "@material-ui/core/Link";
import axios from "axios";
import TopMenu from "./../elements/Appbar";
import StockCards from "../elements/StockCards";

import { Button } from "@material-ui/core";

function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        
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
  btnColor:{
    backgroundColor:"#219653",
    color:"white",
    margin:"0px 10px"
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
  cardRow: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "20px",
  },
}));

export default function Dashboard() {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [page, setPage] = useState(1);
  const [items, setItems] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    axios
      .get(
        "https://mock-backend-apiz.herokuapp.com/api/v1/products?page=" +
          `${page}`
      )
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result);
          setItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, [page]);

  
  

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

        <Container maxWidth="lg" className={classes.container}>
          <Grid container spacing={1}>
            <Grid
              container
              className={classes.cardRow}
              item
              xl={6}
              sm={12}
              spacing={4}
            >
              {items.products &&
                items.products.map((item) => {
                  return (
                    <StockCards
                      price={item.mark_price}
                      salemsg={item.sale_msg}
                      saleprice={item.sale_price}
                      id={item._id}
                      name={item.name}
                      images={item.images}
                    />
                  );
                })}
            </Grid>
          </Grid>
          <Button className={classes.btnColor} onClick={() => setPage(page - 1)}>Prev Page</Button>
          <Button className={classes.btnColor} onClick={() => setPage(page + 1)}>Next Page</Button>
          <Box pt={4}>
            <Copyright />
          </Box>
        </Container>
      </main>
    </div>
  );
}
