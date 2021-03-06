import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Slider from "react-slick";

 
const FlexiLayoutRail = ({ data }) => {
  // console.log(data);
 const [flexiLayoutRailData, setFlexiLayoutRailData] = useState([]);
 useEffect(() => {
   let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}&responseType=common`; 

   axios.get(apiUrl).then((res) => {
      // console.log(res.data);
      setFlexiLayoutRailData(res.data.result); 
      // console.log(setFlexiLayoutRailData)
   });
 }, []);
 const settings = {
  //  dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 5,
   slidesToScroll: 1,
 };
 return (
   <div className="FlexiLayoutRail container-fluid ">
     <div className="title">{data.title}</div>
     <Slider >
       {flexiLayoutRailData.map((data, index) => {
        //  console.log(data);
         let image = data.image4x3;
         

         if (image !== undefined) {
           let imageUrl = `https://v3img.voot.com/resizeMedium,w_845,h_475/${image}`;
           return (
             <div className="flexiLayoutRail">
               <img
                 src={imageUrl}
                 className="d-block slider-image"
                 alt="..."
               />
             </div>
           );
         }
       })}
     </Slider>
   </div>
 );
};

export default FlexiLayoutRail;