import React from "react";


import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';


export default function  Carousel2(props) {
  
console.log(props.img)
  
  return (
    <Carousel style={{height:"50%",objectFit:"contain"}} >
      
      {props.img && props.img.map((image)=>{
        return(
          <div style={{height:"50%"}}>
            <img src={image} alt=''/>
       </div>
        )
      })}
        
  </Carousel>
  );
}
