
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardActionArea from "@material-ui/core/CardActionArea";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import Container from "@material-ui/core/Container";
import Button from "@material-ui/core/Button";
import ArrowDropUpIcon from '@material-ui/icons/ArrowDropUp';
import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import Box from '@material-ui/core/Box';
import StockCharts from "./StockCharts";
import logo from '../../logo.svg';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 300,
    borderRadius: "10px",
   },
  imageHeader:{
      display:"flex",
      flexDirection:"column",
      alignItems:"left"
  },
  cardBottomContainer:{
     display:"flex",
     flexDirection:"row",
     justifyContent:"space-between",
     alignItems:"center",
     paddingLeft:"0px",
     paddingRight:"0px"
 },
  titleTag:{
     textAlign:"left",
     fontSize: "18px",
    lineHeight: "21px",
  },
  smallText:{
       whiteSpace:"nowrap",
       color:"#219653",
      fontWeight: "bold",
      lineHeight: "21px",
  },
  media: {
    height: 140,
  },
  calltoAction:{
     padding:"16px 30px",
     backgroundColor:"#219653",
     alignItems:"right",
     color:"white",
     borderRadius:"10px",
     width:"111px"
  },
  increment:{
     flexDirection:"row",
     display:"flex",
     alignItems:"center",
     fontWeight: "bold"
  },
  rowContainer:{
     display:"flex",
     flexDirection:"column",
  },
  newsSentiment:{
    fontSize: "12px",
    lineHeight: "14px",
  },
  paper: {
    padding: theme.spacing(2),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 230,
    objectFit:"contain"
  },
  icon:{
    color:"#219653",
  },nopad:{
    paddingLeft:"0px",
    paddingRight:"0px"
  },textPos:{
    fontWeight:"bold",

  }
}));

const data = [
  {
    id: 1,
    stockTicker: "ICICI Bank",
    sentimentScore: "Positive",
    currentPrice: 100,
  },
  {
    id: 2,
    stockTicker: "Yes Bank",
    sentimentScore: "Positive",
    currentPrice: 100,
  },
  {
    id: 3,
    stockTicker: "HDFC Bank",
    sentimentScore: "Positive",
    currentPrice: 100,
  },
];

export default function StockCards() {
  const classes = useStyles();
  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
  const textPositive=clsx(classes.icon,classes.textPos)
  return (
    <Card className={classes.root} variant="outlined">
      <Paper className={fixedHeightPaper}>
        <StockCharts />
      </Paper>
      <CardActionArea>
        <CardContent>
          <Container className={classes.nopad}>
          <Box className={classes.cardBottomContainer}>
            {/* <Box className={classes.imageHeader}> */}
        <img className={classes.titleTag} src='data:image/jpeg;base64,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' width="100" height="50" />
          {/* </Box> */}
          <Box className={classes.increment}>
          <Typography  variant="h6" component="h6">
            $321.3
          </Typography>
          
          <ArrowDropUpIcon  className={classes.icon}/>
          <Typography  className={classes.icon} variant="p" component="p">
             26%
          </Typography>
          </Box>

        </Box>
        <Box className={classes.cardBottomContainer}>
        <Typography className={classes.titleTag} variant="h6" component="h6">
          
          ICICIBANK
       </Typography>
        <Typography className={classes.smallText} variant="p" component="p">
            5% return per day
          </Typography>
         
        </Box>
        </Container>
       
          

          {/* <Paper>Sentiment</Paper>
          <Paper>Current Price</Paper>
          <Paper>Return %</Paper> */}

        </CardContent>
      </CardActionArea>
      <CardActions>
        <Container className={classes.cardBottomContainer}>

       <Box className={classes.rowContainer}>
        <Typography className={classes.newsSentiment} variant="p" component="p">
            News setiments
          </Typography>
        <Typography className={textPositive}  variant="h6" component="h6">
           Positive
          <ThumbUpIcon  />
       </Typography>
       </Box>

        <Button size="medium" className={classes.calltoAction}>
          BUY
        </Button>
        </Container>
      </CardActions>
    </Card>
  );
}
