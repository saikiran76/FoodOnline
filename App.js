import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';


const NavBar = () => {
    return (
        <div className="nav">
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Contact</li>
                <li>Profile</li>
            </ul>
        </div>
    );
};

const Header = () => {
    return (
        <div className="main-header">
            <img className="Logo" src="https://image.similarpng.com/very-thumbnail/2021/07/Chef-restaurant-logo-illustrations-template-on-transparent-background-PNG.png" alt="Logo" />
            <NavBar />
        </div>
    );
};

const Search = () =>{
    return(
        <div className="search-bar">
            <h4>Search</h4>
        </div>
    )
}
const AppLayout = (props)=>{
    const {resData} = props; 
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
        deliveryTime

    } = resData?.info;
    return(<div className="card">
        <img className="res" src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId }></img>
        <h2>{name}</h2>
        <h3>Ratings:{avgRating}</h3>
        <h4> </h4>
    </div>
    );

};

const restData = [
    {
        "info": {
            "id": "160221",
            "name": "Hotel Ashoka",
            "cloudinaryImageId": "nimazwcnfbl5a7k2uy0i",
            "locality": "Kasturba Gandhi Ward",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 3.3,
            "parentId": "98151",
            "avgRatingString": "3.3",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 36,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "35-40 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "20% OFF",
                "subHeader": "UPTO ₹50"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/hotel-ashoka-kasturba-gandhi-ward-sahakar-nagar-bhandara-160221",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "183554",
            "name": "Shivam Restaaurant",
            "cloudinaryImageId": "wkbywqceb8prtog4sm77",
            "locality": "MSEB Colony",
            "areaName": "Bhandara Locality",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "Pastas",
                "Desserts",
                "Chinese",
                "North Indian",
                "South Indian",
                "Burgers",
                "Ice Cream",
                "Pizzas",
                "Biryani"
            ],
            "avgRating": 4,
            "parentId": "183622",
            "avgRatingString": "4.0",
            "totalRatingsString": "1K+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:45:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/shivam-restaaurant-mseb-colony-bhandara-locality-bhandara-183554",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "558656",
            "name": "The Pizza Point",
            "cloudinaryImageId": "1d29a38bf2b2f6efab972f76a5c02c04",
            "locality": "MSEB Colony",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Pizzas",
                "Italian"
            ],
            "avgRating": 3.5,
            "parentId": "212633",
            "avgRatingString": "3.5",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 47,
                "lastMileTravel": 1,
                "serviceability": "SERVICEABLE",
                "slaString": "45-50 mins",
                "lastMileTravelString": "1.0 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 21:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "30% OFF",
                "subHeader": "UPTO ₹75"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-pizza-point-mseb-colony-sahakar-nagar-bhandara-558656",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "160232",
            "name": "House Of Biryani",
            "cloudinaryImageId": "h7ytetmbmr0brji9p0bw",
            "locality": "Kasturba Gandhi Ward",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹100 for two",
            "cuisines": [
                "North Indian",
                "Biryani"
            ],
            "avgRating": 2.8,
            "parentId": "9334",
            "avgRatingString": "2.8",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 33,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/house-of-biryani-kasturba-gandhi-ward-sahakar-nagar-bhandara-160232",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "160189",
            "name": "Zaika",
            "cloudinaryImageId": "neuj7ebmnclua3995wez",
            "locality": "Kasturba Gandhi Ward",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹300 for two",
            "cuisines": [
                "North Indian",
                "Chinese"
            ],
            "avgRating": 2.3,
            "parentId": "2551",
            "avgRatingString": "2.3",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 34,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/zaika-kasturba-gandhi-ward-sahakar-nagar-bhandara-160189",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "160145",
            "name": "Spicy Kitchen",
            "cloudinaryImageId": "xjd9bl8wggq3t7ghoa5o",
            "locality": "Kasturba Gandhi Ward",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹150 for two",
            "cuisines": [
                "North Indian"
            ],
            "avgRating": 2.1,
            "parentId": "4281",
            "avgRatingString": "2.1",
            "totalRatingsString": "20+",
            "sla": {
                "deliveryTime": 35,
                "lastMileTravel": 2.2,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "2.2 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:00:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/spicy-kitchen-kasturba-gandhi-ward-sahakar-nagar-bhandara-160145",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "587696",
            "name": "Haldiram's Sweets and Namkeen",
            "cloudinaryImageId": "25c3a7d394d6c5556b134385f7d665b0",
            "locality": "Bhojapur",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹400 for two",
            "cuisines": [
                "Sweets",
                "Snacks",
                "Desserts",
                "Bakery",
                "Beverages"
            ],
            "avgRating": 4.3,
            "veg": true,
            "parentId": "391465",
            "avgRatingString": "4.3",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 24,
                "lastMileTravel": 2.7,
                "serviceability": "SERVICEABLE",
                "slaString": "20-25 mins",
                "lastMileTravelString": "2.7 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:30:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "aggregatedDiscountInfoV2": {},
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/haldirams-sweets-and-namkeen-bhojapur-sahakar-nagar-bhandara-587696",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "533212",
            "name": "Fusion Cafe And Reastorent",
            "cloudinaryImageId": "gktx4ohvy32ddnkn3mlk",
            "locality": "Vaishali Nagar",
            "areaName": "Sahakar Nagar",
            "costForTwo": "₹200 for two",
            "cuisines": [
                "Beverages",
                "Indian",
                "Chinese"
            ],
            "avgRating": 3.8,
            "parentId": "320720",
            "avgRatingString": "3.8",
            "totalRatingsString": "50+",
            "sla": {
                "deliveryTime": 31,
                "lastMileTravel": 0.5,
                "serviceability": "SERVICEABLE",
                "slaString": "30-35 mins",
                "lastMileTravelString": "0.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 21:30:00",
                "opened": true
            },
            "badges": {},
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {},
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "10% OFF",
                "subHeader": "UPTO ₹40"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/fusion-cafe-and-reastorent-vaishali-nagar-sahakar-nagar-bhandara-533212",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    },
    {
        "info": {
            "id": "354216",
            "name": "The Bake Shop",
            "cloudinaryImageId": "fuwnu9kwxghwcww4kknw",
            "locality": "Sahakar Nagar",
            "areaName": "Mseb Colony",
            "costForTwo": "₹250 for two",
            "cuisines": [
                "Bakery"
            ],
            "avgRating": 3.5,
            "veg": true,
            "parentId": "3608",
            "avgRatingString": "3.5",
            "totalRatingsString": "100+",
            "sla": {
                "deliveryTime": 29,
                "lastMileTravel": 1.5,
                "serviceability": "SERVICEABLE",
                "slaString": "25-30 mins",
                "lastMileTravelString": "1.5 km",
                "iconType": "ICON_TYPE_EMPTY"
            },
            "availability": {
                "nextCloseTime": "2024-02-15 22:00:00",
                "opened": true
            },
            "badges": {
                "imageBadges": [
                    {
                        "imageId": "v1695133679/badges/Pure_Veg111.png",
                        "description": "pureveg"
                    }
                ]
            },
            "isOpen": true,
            "type": "F",
            "badgesV2": {
                "entityBadges": {
                    "imageBased": {
                        "badgeObject": [
                            {
                                "attributes": {
                                    "description": "pureveg",
                                    "imageId": "v1695133679/badges/Pure_Veg111.png"
                                }
                            }
                        ]
                    },
                    "textBased": {},
                    "textExtendedBadges": {}
                }
            },
            "aggregatedDiscountInfoV3": {
                "header": "₹50 OFF",
                "subHeader": "ABOVE ₹199",
                "discountTag": "FLAT DEAL"
            },
            "orderabilityCommunication": {
                "title": {},
                "subTitle": {},
                "message": {},
                "customIcon": {}
            },
            "differentiatedUi": {
                "displayType": "ADS_UI_DISPLAY_TYPE_ENUM_DEFAULT",
                "differentiatedUiMediaDetails": {
                    "mediaType": "ADS_MEDIA_ENUM_IMAGE",
                    "lottie": {},
                    "video": {}
                }
            },
            "reviewsSummary": {},
            "displayType": "RESTAURANT_DISPLAY_TYPE_DEFAULT",
            "restaurantOfferPresentationInfo": {}
        },
        "analytics": {
            "context": "seo-data-7421017e-2088-439b-b04d-b4221df56eb3"
        },
        "cta": {
            "link": "https://www.swiggy.com/restaurants/the-bake-shop-sahakar-nagar-mseb-colony-bhandara-354216",
            "text": "RESTAURANT_MENU",
            "type": "WEBLINK"
        },
        "widgetId": "collectionV5RestaurantListWidget_SimRestoRelevance_food_seo"
    }
]

const Body =()=>{
    return(
    <div className="content">
        <Header/>
        <Search/>
        <div id="container">
            {
            restData.map((res)=>(
                <AppLayout resData={res}/>

            ) )
            }
            
        </div>

    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);


