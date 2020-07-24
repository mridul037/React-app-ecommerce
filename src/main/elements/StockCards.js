import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Typography from "@material-ui/core/Typography";
import Paper from "@material-ui/core/Paper";
import clsx from "clsx";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  root: {
    maxWidth: 340,
    width: "260px",
    borderRadius: "0px 0px 10px 10px",
    marginBottom: "20px",
    [theme.breakpoints.down("md")]: {
      width: "170px",
    },
    [theme.breakpoints.down("sm")]: {
      width: "160px",
    },
  },

  paper: {
    padding: theme.spacing(1),
    display: "flex",
    flexDirection: "column",
  },
  fixedHeight: {
    height: 200,
    objectFit: "contain",
  },

  text: {
    textAlign: "left",
    fontSize: "12px",
    margin: "10px 0px",
  },

  img: {
    width: "100%",
    height: "100%",
    objectFit: "contain",
    [theme.breakpoints.down("md")]: {
      objectFit: "contain",
      width: "100%",
      height: "100%",
    },
  },
}));

export default function StockCards(props) {
  const classes = useStyles();

  const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);

  const history = useHistory();

  function handleClick() {
    history.push("/Cart", {
      id: props.id,
    });
  }

  return (
    <div className={classes.root} variant="outlined">
      <Paper className={fixedHeightPaper} onClick={handleClick}>
        <img className={classes.img} src={props.images[0]} alt="" />
      </Paper>
      <Typography className={classes.text}>
        <React.Fragment>
          <dt> {props.name}</dt>
          <dt style={{ textDecoration: "line-through", color: "red" }}>
            ₹:{props.price}
          </dt>
          <dt>{props.salemsg}</dt>
          <dt>₹:{props.saleprice}</dt>
        </React.Fragment>
      </Typography>
    </div>
  );
}
