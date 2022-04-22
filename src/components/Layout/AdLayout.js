import React, { useEffect, useState } from "react";
import axios from "axios";
import { Row } from "react-bootstrap";
import Slider from "react-slick";

 
const AdLayout = ({ data }) => {
  // console.log(data);
 const [adLayoutData, setAdLayoutData] = useState([]);
 useEffect(() => {
   let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}&responseType=common`; 

   axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setAdLayoutData(res.data.result); 
      console.log(setAdLayoutData);
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
   <div className=" container-fluid ">
     <Slider {...settings} dots={true}>
       {adLayoutData.map((data, index) => {
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

export default AdLayout;