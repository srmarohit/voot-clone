import React, { useEffect, useState } from "react";
import axios from "axios";
import MustHeadComponent from "../components/MustHeadComponent";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
// import ChipsButtonRail from "../components/Layout/ChipsButtonRail";

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
      console.log(res);
      setTrayData(res.data.trays); // Getting all tray  data here
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
    console.log(arrayData);
    let listOfTray = arrayData.map((e) => {
      console.log(e);
      switch (e.layout) {
        case "WatchNextRail":
          return (
            <div className="row">
              <MustHeadComponent data={e} />
            </div>
          );
      }
    });

    setListOfTray(listOfTray);
  }, [trayData]);

  return (
    <div className="container-fluid">
      {/* This is MainContainer */}
      {listOfTray}
    </div>
  );
};

export default MainContainer;
