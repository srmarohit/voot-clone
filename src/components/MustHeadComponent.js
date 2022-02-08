import React, { useEffect, useState } from "react";
import axios from 'axios';
const MustHeadComponent = ({data}) =>{
        const [mustheadData, setMustHeadData] = useState([])
    useEffect(()=>{
        let apiUrl = `https://psapi.voot.com/jio/voot/v1/voot-web/${data.apiUrl}`;

        axios.get(apiUrl)
        .then(res =>{
           console.log(res.data)
        })

    },[])
    return(
        <div>
            Hi this is MustHeadComponent
        </div>
    )
}

export default MustHeadComponent;