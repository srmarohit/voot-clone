import React, { useEffect, useState } from "react";
import axios from "axios";
import MustHeadComponent from "../components/MustHeadComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import ChipsButtonRail from "../components/Layout/ChipsButtonRail";
import FlexiLayoutRail from "../components/Layout/FlexiLayoutRail";
import ContentCardRail from "../components/Layout/ContentCardRail";
import SpotlightMini from "../components/Layout/SpotlightMini";
// import AdLayout from "../components/Layout/AdLayout";

const MainContainer = () => {
  const [page, setPage] = useState(1);
  const [mainPage, setMainPage] = useState("my-voot");
  const [newArray, setNewArray] = useState([]);
  const [trayData, setTrayData] = useState([]);
  const [listOfTray, setListOfTray] = useState([]);

  let baseUrl = "https://psapi.voot.com/jio/voot/v1/voot-web/"; // base Url
  useEffect(() => {
    let getTrayUrl = `${baseUrl}/view/${mainPage}?page=${page}&responseType=common&features=include:buttonsTray&premiumTrays=false`;
    axios.get(getTrayUrl).then((res) => {
      // console.log(res);
      setTrayData(res.data.trays); // Getting all tray  data here
      if (page < 200) {
        setPage(page + 1);
      }
    });
  }, [page]);

  useEffect(() => {
    let arrayData = [];
    trayData.filter((e) => {
      if (e.apiUrl.length > 20) {
        // from the traydata taking url and titlle
        arrayData.push({
          url: e.apiUrl,
          layout: e.layout,
          title: e.title,
        });
      }
    });

    setNewArray(arrayData);
    // console.log(arrayData);
    let listOfTray = arrayData.map((e) => {
      // console.log(e);
      switch (e.layout) {
        case "WatchNextRail":
          return (
            <div className="row">
              <MustHeadComponent data={e} />
            </div>
          );
        case "ChipsButtonLayoutRail":
          return (
            <Row className="row mt-3  container">
              <ChipsButtonRail data={e} />
            </Row>
          );

        case "FlexiLayoutRail":
          return (
            <div className="row mt-3 d-flex">
              <FlexiLayoutRail data={e} />
            </div>
          );

        case "ContentCardRail":
          return (
            <div>
              <ContentCardRail data={e} />
            </div>
          );

        //           case "AdLayout":
        //             return(
        //             <div>
        //               <AdLayout data = {e}/>
        //             </div>
        // );

        case "ContentCardRail":
          return (
            <div>
              <SpotlightMini data={e} />
            </div>
          );
      }
    });

    setListOfTray(listOfTray);
  }, [trayData]);

  return (
    <div
      className="container-fluid"
      style={{ flex: 8, height: "100vh", width: "80%", overflow: "scroll" }}
    >
      {/* This is MainContainer */}
      {listOfTray}
    </div>
  );
};

export default MainContainer;
