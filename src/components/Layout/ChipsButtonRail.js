import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";


const ChipsButtonRail = ({ data }) => {
  
    // console.log(data);
    const [chipsButtonRailData, setChipsButtonRailData] = useState([]);

  useEffect(() => {
    let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}`; 
    // console.log("hjdsgs");
    axios.get(apiUrl).then((res) => {
      // console.log(res.data);
      setChipsButtonRailData(res.data.result);
      // console.log(res.data.result)

    });
  }, []);
 
  return(

    <div className="d-flex text-white mt-5">
       {
         chipsButtonRailData.map((data,index) =>{
           return(
             <div className="custom-chip mx-10" >
               {data.meta.assetRef.buttonText}
              </div>
           )
         })
       }
    </div>
  )
  

   
  }
         
export default ChipsButtonRail;
    
     