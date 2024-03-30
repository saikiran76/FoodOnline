import { LOGO_LINK } from "../utils/config";
import { useState } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import { useSelector } from "react-redux";

const NavBar = () => {
    const [btnName, setbtnName] =  useState("Login");
    const onlineStatus = useOnlineStatus();

    const cart = useSelector((store) => store.cart.items);
    console.log(cart);
    return (
        <div className="h-24 flex justify-between bg-pink-100 shadow-lg mb-4 font-martelsans">
            <div className="logo-container">
                <img className="w-24" src={LOGO_LINK} alt="Logo" />
            </div>
            <div className="nav-items float-right">
                <ul className="flex p-4 m-4">
                    <li className="m-2"><Link to = "/">Home</Link></li>
                    <li className="m-2"><Link to = "/about">About</Link></li>
                    <li className="m-2"><Link to = "/contact">Contact</Link></li>
                    <li className="m-2">Profile</li>
                    <li className="m-2">Status:{onlineStatus ? "🟢" :"🔴"}</li>
                    <li className="m-2"><Link to="/cart">Cart({cart.length})</Link></li>
                    
                    <button className="w-20 transition ease-in-out delay-150 bg-green-500 hover:-translate-y-1 hover:scale-110 hover:bg-pink-500 duration-300 ... rounded-lg mx-2" onClick={()=>{
                        setbtnName("Logout");
                        console.log(btnName);
                    }}>{btnName}</button>
            </ul>
            </div>
            
        </div>
    );
};

const Header = () => {
    return (
        <div className="main-header">
            <NavBar />
        </div>
    );
};

export default Header;