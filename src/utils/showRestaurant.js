import { useEffect, useState } from "react";
import { RestaurantAPI } from "./config";
import { json } from "body-parser";

const showRestuaraunt = (resId) =>{
    const [resData, setResData] = useState(null);
    
    useEffect(()=>{
        fetchingData();
    }, []); 

    const fetchingData = async() =>{
        const fetchData = await fetch(RestaurantAPI + resId);
        const JSONData = await fetchData.json();
        console.log(JSONData);
        setResData(JSONData.data);

    }

    return resData;
}
export default showRestuaraunt;


