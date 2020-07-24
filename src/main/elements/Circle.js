import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Button from "@material-ui/core/Button";
const useStyles = makeStyles((theme) => ({

button:{
    height:"15px",borderRadius:"50%",margin:"0px 4px"
},
text:{
    whiteSpace:"nowrap",
},


}))

export default function  Circle(props) {
  
 const classes = useStyles();
  
  return (
      <div  >
          <Button>
    <button style={{backgroundColor:`${props.col}`}} className={classes.button}>
      
    </button>
    <span className={classes.text}>
    {props.col}</span>
    </Button>
        </div>
        
  );
}
