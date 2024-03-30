import { useState, useEffect } from "react";
import Shimmer from "./Shimmer";
import { useParams } from "react-router-dom";
import showRestuaraunt from "../utils/showRestaurant";
import RestrauntCategory from "./RestrauntCategories";

export const Restaurant = () =>{
    const {resId} = useParams();
    const resData = showRestuaraunt(resId);

    const [showIndex, setShowIndex] = useState(null);

    if(resData === null){
        return <Shimmer/>
    };

    const {name, costForTwoMessage, cloudinaryImageId} = resData?.cards[0]?.card?.card?.info;


    const {itemCards} = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

   
    const categories = resData?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter((c)=>
      c?.card?.["card"]?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
      )

    console.log(categories);
    return(
        <div className="text-center">
          <h1 className="text-3xl font-martelsans pb-4">{name}</h1>
          <p className="font-martelsans">{costForTwoMessage}</p>
          <div>
            {
            categories.map((category, index)=>(
              <RestrauntCategory
              key = {category?.card?.card?.title}
              data ={category?.card?.card}
              showItems = {index === showIndex ? true : false}
              setShowIndex={() => setShowIndex(index)}
               
              />
            ))
          }

          </div>


        </div>
)

}
