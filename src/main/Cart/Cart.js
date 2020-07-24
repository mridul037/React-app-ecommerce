import React, { useState, useEffect } from "react";
import clsx from "clsx";
import { makeStyles } from "@material-ui/core/styles";
import CssBaseline from "@material-ui/core/CssBaseline";
import Box from "@material-ui/core/Box";
import AppBar from "@material-ui/core/AppBar";
import Typography from "@material-ui/core/Typography";
import Container from "@material-ui/core/Container";
import axios from "axios";
import TopMenu from "./../elements/Appbar";
import Carousel2 from "../elements/Carousel";
import Circle from "../elements/Circle";
import Size from "../elements/Size";
import { Button, TextareaAutosize } from "@material-ui/core";



const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  toolbar: {
    paddingRight: 24, // keep right padding when drawer closed
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
    display: "flex",
    flexDirection: "row",
    [theme.breakpoints.down("md")]: {
      flexDirection: "column",
    },
  },
  
  desc: {
    fontSize: "12px",
    textAlign: "left",
    color: "grey",
  },

  cardRow: {
    display: "flex",
    justifyContent: "space-evenly",
    marginBottom: "20px",
  },
  over:{
      overflow:"auto",
    [theme.breakpoints.down("md")]:{
  overflow:"scroll"
    }
  },
  textPrice: {
    display: "flex",
  },
  spacing: {
    marginTop: "16px",
    marginBottom: "16px",
  },
  subhead: {
    fontSize: "14px",
  },
  cta: {
    backgroundColor: "#219653",
    color: "white",

    width: "80%",
    [theme.breakpoints.down("md")]: {
      width: "80vw",
    },
  },
  text: {
    textAlign: "left",
    margin: "0px 12px",
  },
  contentDesc: {
    width: "50vw",
    padding: "0px 14px",
    [theme.breakpoints.down("md")]: {
      width: "100vw",
      alignItems: "center",
    },
  },
  row:{
       display:"flex",
       flexDirection:"row"
  },
  border: {
    border: "groove",
    borderColor: "#219653",
    color: "#219653",
    padding: "0px",
  },
}));

export default function Cart(props) {
  const [error, setError] = useState(null);
  const [isLoaded, setIsLoaded] = useState(false);
  const [quant, setQuant] = useState(0);
  const [cartItems, setCartItems] = useState([]);
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);
  useEffect(() => {
    axios
      .get(
        "https://mock-backend-apiz.herokuapp.com/api/v1/products/" +
          `${props?.location?.state?.id}`
      )
      .then(
        (result) => {
          setIsLoaded(true);
          console.log(result.data);
          setCartItems(result.data);
        },
        (error) => {
          setIsLoaded(true);
          setError(error);
        }
      );
  }, []);

 
  
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
          <Box className={classes.contentDesc}>
            <Carousel2
              img={
                cartItems.primary_product && cartItems.primary_product.images
              }
            />
          </Box>

          <Box className={classes.contentDesc}>
            <Typography className={classes.text}>
              <h2>
                {cartItems.primary_product && cartItems.primary_product.name}
              </h2>
              <p className={classes.desc}>
                {" "}
                {cartItems.primary_product &&
                  cartItems.primary_product.desc}{" "}
              </p>
            </Typography>
            <hr />
            <Typography className={classes.textPrice}>
              <h2 style={{ textAlign: "left" }}>
                ₹
                {cartItems.primary_product &&
                  cartItems.primary_product.sale_price}
              </h2>
              <h3 style={{ textDecoration: "line-through", color: "grey" }}>
                ₹
                {cartItems.primary_product &&
                  cartItems.primary_product.mark_price}
              </h3>
            </Typography>
            <Typography className={classes.text}>
              <p style={{ color: "#219653" }}>
                You save{" "}
                {cartItems.primary_product &&
                  cartItems.primary_product.sale_msg}
              </p>
              <p style={{ fontSize: "10px" }}>
                Local taxex included(where applicable)
              </p>
            </Typography>
            <hr />

            <Typography
              style={{ margin: "20px 0px" }}
              className={clsx(classes.text, open && classes.subhead)}
            >
              color available
            </Typography>
            <Box className={clsx(classes.text, open && classes.spacing,open && classes.row,open && classes.over)}>
            
                      
                    {cartItems.options &&
                      cartItems.options.map((val) => {
                         
                          const istrue=(cartItems?.attributes[1]?._id===val.attrib_id)?true:false;
                          console.log(istrue);
                          return (
                           <span>
                              {istrue && <Circle col={val.name}/>}
                            </span>
                          );
                          
                      })
                      
                    }
            </Box>
            <Typography
              style={{ margin: "20px 0px" }}
              className={clsx(classes.text, open && classes.subhead)}
            >
              Size available
            </Typography>
            <Box className={clsx(classes.text, open && classes.spacing,open && classes.row,open && classes.over)}>
            
                      
                    {cartItems.options &&
                      cartItems.options.map((val) => {
                         
                          const istrue=(cartItems?.attributes[0]?._id===val.attrib_id)?true:false;
                          console.log(istrue);
                          return (
                           <span>
                              {istrue && <Size col={val.name}/>}
                            </span>
                          );
                          
                      })
                      
                    }
            </Box>

            <Typography
              style={{ marginTop: "20px" }}
              className={clsx(classes.text, open && classes.subhead)}
            >
              Quantity
            </Typography>

            <div className={classes.text}>
              <Button
                className={classes.border}
                onClick={() => setQuant(quant - 1)}
              >
                -
              </Button>

              <Button
                className={classes.border}
                style={{color:"white",backgroundColor:"#219653"}}
              >
                {quant}
              </Button>
              <Button
              className={classes.border}
                onClick={() => setQuant(quant + 1)}
              >
                +
              </Button>
            </div>

            <Box style={{ margin: "20px 0px" }} className={classes.cta}>
              <Button style={{ color: "white" }}>ADD TO CART</Button>
            </Box>
          </Box>
        </Container>
      </main>
    </div>
  );
}
