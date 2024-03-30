import User from "./UserClass";
import React from "react";

class AboutClass extends React.Component{
    constructor(props){
        super(props);

        console.log("Parent Constructor");

    }

    componentDidMount(){
        console.log("parent component has been mounted")
    }

    render(){
        return(
            <div className="about">
                <h1>About</h1>
                <User name = "Kiran" location = "VZM"/>
                <User name = "Musk" location = "USA"/>
            </div>
        )
    }
}


// const About =()=>{
//     return(
//         <div className="about">
//             <h1>About</h1>
//             <User name = "Kiran" location = "VZM"/>
//             <User name = "Musk" Location = "US"/>

//         </div>
        
//     )

// }

export default AboutClass;