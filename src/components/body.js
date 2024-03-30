import Cards from "./cards";
import { useState, useEffect  } from "react";
import Shimmer from "./Shimmer.js";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import grocery from "./Grocery.js"; 
import { withPromotion} from "./cards";
import Cards from "./cards";

const Body =()=>{
    // Local state variable - super powerful variable
    const [ListOfRestauarants, setListOfRestaurants] = useState([]);
    const [filteredRestauarant, setfilteredRestaurant] = useState([]);
    const [searchText, setSearchText] = useState("");

    const promotedRestauraunt = withPromotion(Cards);
    useEffect(()=>{
        fetchData();
    }, []);

    const fetchData = async ()=>{
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=12.9715987&lng=77.5945627&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");

        const jsonData = await data.json();

        // console.log(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);

        //optional chaining
        setListOfRestaurants(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
        //data.cards[3].card.card.gridElements.infoWithStyle
        // data.cards[2].card.card.gridElements.infoWithStyle
        // data.cards[2].card.card.gridElements.infoWithStyle.restaurants
        setfilteredRestaurant(jsonData.data.cards[4].card.card.gridElements.infoWithStyle.restaurants);
    
    };

    // conditional rendering - rendering based on condition

    return ListOfRestauarants.length === 0? (<Shimmer/>) :(
        <div id="filter-container">
            <div className="flex font-martelsans">
                <div className="search-bar">
                <input className="border border-solid border-red-300 mx-4 rounded px-2 py-1 h-5" type="text" value={searchText} onChange={
                    (e) =>{
                        setSearchText(e.target.value)
                        console.log("Body Component rendered");
                    }
                }>

                </input>
        
                <button className="w-16 transition ease-in-out delay-200 bg-green-500 hover:-translate-y-1 hover:scale-100 hover:bg-pink-500 duration-400 ... rounded mx-2" onClick={()=>{
                    console.log("Button has been clicked");
                    console.log(searchText);
                    const filteredRestauarant = ListOfRestauarants.filter(
                        (res)=>
                        {
                            res.info.name.includes(searchText)
                        });
                    console.log(filteredRestauarant);
                    setfilteredRestaurant(filteredRestauarant);
                }}>search</button> 
            </div>
    
                <button
                 className="filter-btn mx-1" 
                 onClick={()=>{
                    const filteredList = ListOfRestauarants.filter(
                        (res=> res.info.avgRating > 4)
                    );
                    setListOfRestaurants(filteredList);
                }}
                >
                    Filter
                </button>
            </div>
            <div className="flex flex-wrap">
                {
                filteredRestauarant.map((res)=>(
                    <Link to= {"/restauraunts/"+res.info.id}>
                        {res.info.promoted ? (<promotedRestauraunt resData={res}/>) : (
                        <Cards key ={res.info.id} resData={res}/> )}
                    </Link>

                ) )

                }
            </div>
            
        </div>
    );
};

export default Body;