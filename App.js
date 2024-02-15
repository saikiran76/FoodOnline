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
            <img className="Logo" src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fsimilarpng.com%2Fchef-restaurant-logo-illustrations-template-on-transparent-background-png%2F&psig=AOvVaw2ZNXALMsduIHCOecbglhjX&ust=1708019492125000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCPCUzsuyq4QDFQAAAAAdAAAAABAE" alt="Logo" />
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
const AppLayout = ({ResName, Rating, Time})=>{
    return(<div className="card">
        <img className="res" src=""></img>
        <h2>{ResName}</h2>
        <h3>Ratings: {Rating}</h3>
        <h4>Delievery time: {Time} </h4>
    </div>
    );

};

const Body =()=>{
    return(
    <div className="content">
        <Header/>
        <Search/>
        <div id="container">
            <AppLayout ResName="Neel Foods" Rating="4.0" Time="35mins" />
            <AppLayout ResName="RMouli Dishes" Rating="4.3" Time="55mins" />
            <AppLayout ResName="3vkram celluloids " Rating="3.0" Time="25mins" />
            <AppLayout ResName="Maruti Restraunt" Rating="2.5" Time="18mins" />
        </div>

    </div>
    );
};

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Body/>);


