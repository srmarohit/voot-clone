import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";


const ChipsButtonRail = ({ data }) => {
    console.log(data);
    const [ChipButtonRailData, setChipButtonRailData] = useState([]); 
// useEffect(() => {
//     let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}`; 

//     axios.get(apiUrl).then((res) => {
//       console.log(res.data); 
//       setChipButtonRailData(res.data.result);
//     });
//   }, []);

  return(

    <div>
        <ChipsButtonRail>
        data={ChipsButtonRail}
        data2={e}
         details ={details.props}

);
        </ChipsButtonRail>
    </div>
  )
  

   
  }
         
export default ChipsButtonRail;
    
     