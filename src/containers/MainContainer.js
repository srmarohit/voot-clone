import React, { useEffect, useState } from "react";
import axios from "axios";
import MustHeadComponent from "../components/MustHeadComponent";

const MainContainer = () => {
  const [page, setPage] = useState(1);
  const [mainPage, setMainPage] = useState("my-voot");
  const [newArray, setNewArray]= useState([]);

  let baseUrl = "https://psapi.voot.com/jio/voot/v1/voot-web/"; 
  useEffect(() => {
    let getTrayUrl = `${baseUrl}/view/${mainPage}?page=${page}&responseType=common&features=include:buttonsTray&premiumTrays=false`;
    let arrayData = [];
    axios.get(getTrayUrl).then((res) => {
      console.log(res);
      res.data.trays.filter((e) => {
        if (e.apiUrl.length > 20) {
            arrayData.push({
            url: e.apiUrl,
            layout: e.layout,
            title: e.title
          });
        }
      });
    });

    setNewArray(arrayData)
   
    
  }, [page]);

  useEffect(()=>{
    let listOfTray = newArray.map((e)=>{
        console.log(e);
        switch(e.layout){
            case "WatchNextRail":
                return(
                    <div className="row">
                        <MustHeadComponent 
                        data ={e} 
                        />
                    </div>
                )
        }
    })

  }, [newArray])

  return <div>This is MainContainer</div>;
};

export default MainContainer;
