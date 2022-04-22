import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Slider from "react-slick";

 
const ContentCardRail = ({ data }) => {
  // console.log(data);
 const [contentCardRailData, setContentCardRailData] = useState([]);
 useEffect(() => {
   let apiUrl = `https://psapi.voo.slider-imaget.com/jio/voot/v1/voot-web/${data.url}&responseType=common`; 

   axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setContentCardRailData(res.data.result); 
      console.log(setContentCardRailData)
   });
 }, []);
 const settings = {
   dots: true,
   infinite: true,
   speed: 500,
   slidesToShow: 2,
   slidesToScroll: 1,
 };
 return (
   <div className="ContentCardRail container-fluid ">
     <Slider {...settings} dots={true}>
       {contentCardRailData.map((data, index) => {
         let image = data.image4x3;
         

         if (image !== undefined) {
           let imageUrl = `https://v3img.voot.com/resizeMedium,w_845,h_475/${image}`;
           return (
             <div className="slider-image-container" key={index}>
               <img
                 src={imageUrl}
                 className="d-block w-100 slider-image"
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

export default ContentCardRail;