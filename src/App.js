import React from "react";
import ReactDOM from "react-dom/client";
import './style.css';
import Header from "./components/header";
import Body from "./components/body";
import { Contact } from "./components/Contact";
import { Restaurant } from "./components/Restauraunt";
import { createBrowserRouter } from "react-router-dom";
import { RouterProvider } from "react-router-dom";
import { Outlet } from "react-router-dom";
import About from "./components/About";
import { lazy } from "react";
import grocery from "./components/Grocery";
import { Provider } from "react-redux";
import AppStore from "./utils/AppStore";



// Config Driven UI

const Grocery = lazy(()=>{
    import("./components/Grocery");
});


const AppLayout = ()=>{
    
    return(
        <Provider store={AppStore}>
            <div className="app">
                <Header/>
                <Outlet/>
            </div>
        </Provider>
    );
}

const appRouter = createBrowserRouter([
    {
        path: "/",
        element : <AppLayout/>,
        children: [
            {
                path: "/",
                element: <Body/>
            },
            {
                path: "/contact", 
                element: <Contact/>
            },
            {
                path: "/restauraunts/:resId",
                element: <Restaurant/>
            },
            {
                path: "/about",
                element: <About/>
            },
            {
                path : "/grocery",
                element: <grocery/>

            },

        ]

    },
    
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router = {appRouter}/>);


