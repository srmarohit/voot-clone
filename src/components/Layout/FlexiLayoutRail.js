import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";


const FlexiLayoutRail = ({data}) => {
  
    // console.log(data);
    const [flexiLayoutRailData, setFlexiLayoutRailData] = useState([]);

  useEffect(() => {
    let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}`; 
    // console.log("hjdsgs");
    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setFlexiLayoutRailData(res.data.result);
      console.log(res.data.result) 

    });
  }, []);

  return(

    <div>
       {
         flexiLayoutRailData.map((data,index) =>{
           return(
             <div>
               HI
              </div>
           )
         })
       }
    </div>
  )
  

   
  }
         
export default FlexiLayoutRail;
    
     