import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
 

const FlexiLayoutRail = ({data}) => { 
    
    console.log(data);
    const [flexiLayoutRailData, setFlexiLayoutRailData] = useState([]);

  useEffect(() => {
    console.log(data.url);
    // let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}`; 
    let apiUrl='https://psapi.voot.com/jio/voot/v1/voot-web/content/specific/editorial?query=include%3Ab3e6bd0018784e50d9e95d50b5f091c5&aspectRatio=3x4&responseType=common'
    console.log("hjdsgs");
    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setFlexiLayoutRailData(res.data.result);
      // console.log(res.data.result) 

    });
  }, []);

  return(

    <div className="d-flex text-white mt-5">
       {
         flexiLayoutRailData.map((data,index) =>{
           return(
             <div className="FlexiLayoutRail" >
               {data.mata.details.image}
              </div>
           )
         })
       }
    </div>
  )
   
  }
         
export default FlexiLayoutRail;
    
     