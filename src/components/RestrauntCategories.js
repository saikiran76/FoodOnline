import ItemList from "./itemList";
import { useState } from "react";

const RestrauntCategory = ({data, showItems, setShowIndex}) =>{

    const handleClick = () =>{
        {!showItems ? setShowIndex(null) : setShowIndex()}
      }
    return(
        <div>
            <div className="font-martelsans w-6/12 mx-auto bg-gray-100 flex justify-between p-3 rounded-md my-2 shadow-lg cursor-pointer" onClick={handleClick}>
                <span>{data.title} ({data.itemCards.length})</span>
                <span>{'📩'}</span>

            </div>
            {showItems && <ItemList items={data.itemCards} />}
        </div>
    )
}

export default RestrauntCategory;