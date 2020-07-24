import React from "react";
import { makeStyles } from "@material-ui/core/styles";
const useStyles = makeStyles((theme) => ({
  button: {
    borderColor: "black",
    backgroundColor: "white",
    margin: "0px 6px",
    padding: "8px 8px",
  },
}));

export default function Size(props) {
  const classes = useStyles();

  return (
    <div>
      <button className={classes.button}>{props.col}</button>
    </div>
  );
}
