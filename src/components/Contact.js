import { useState } from "react";

export const Contact = () =>{
    const [showMessage, SetShowMessage] = useState(false);
    return(
        <div className="m-4 mt-10">
            <h1 className="font-extrabold text-2xl font-martelsans m-1">Contact</h1>
            <input type="text" placeholder="Enter your mail" className="m-1 rounded-md px-1 py-1 font-martelsans"></input>
            <button type="submit" className="bg-green-900 text-white p-2 rounded-lg m-2 font-martelsans" onClick={()=>{
                 SetShowMessage(true);
            }}>Submit</button>
            { SetShowMessage &&<h2 className="visible">We will be in touch with you so soon!!</h2>}
        </div>
    )

}