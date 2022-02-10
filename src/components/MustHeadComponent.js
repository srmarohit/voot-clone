import React, { useEffect, useState } from "react";
import axios from "axios";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
const MustHeadComponent = ({ data }) => {
  console.log(data);
  const [mustheadData, setMustHeadData] = useState([]);
  useEffect(() => {
    let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.url}`; // after tray  api url for component

    axios.get(apiUrl).then((res) => {
      console.log(res.data);
      setMustHeadData(res.data.result);
    });
  }, []);
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };
  return (
    <div className="container-fluid">
      <Slider {...settings} dots={true}>
           {mustheadData.map((data, index) => {
            let image = data.details.image["16x9"];
            console.log(image);

            if(image !== undefined){
              console.log("dasjdasdhsakd");
            }
            let imageUrl = `https://v3img.voot.com/resizeMedium,w_845,h_475/${image}`;
            console.log(imageUrl);
            return (
              <div className="slider-image-container" key={index}>
                <img src={imageUrl} className="d-block w-100 slider-image" alt="..." />
              </div>
            );
          })}
        </Slider>
      {/* Hi this is MustHeadComponent */}
     
    </div>
  );
};

export default MustHeadComponent;
