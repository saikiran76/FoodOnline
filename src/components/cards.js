import { IMGS_LINK } from "../utils/config";
import { withPromotion } from "./Restauraunt";

const Cards = (props)=>{
    const {resData} = props; 
    const {
        cloudinaryImageId,
        name,
        avgRating,
        cuisines,
        costForTwo,
    } = resData?.info;  
    
    return(
    <div className="bg-gray-200 mt-6 mx-4 h-64 w-44 rounded-md flex-col justify-center items-center font-martelsans">
        <img className="h-40 w-48 rounded-md" src = {IMGS_LINK + cloudinaryImageId}></img>
        <h3 className="font-bold mt-2">{name}</h3>
        <h4><span className="font-bold pr-1">Ratings</span>:{avgRating}</h4>
    </div>
    );

};


export const withPromotion = (Restauraunt)=>{
    return(props)=>{
        return(
        <div>
            <label className="absolute bg-white text-black">Promoted</label>
            <Restauraunt {...props}/>
        </div>)
       
    }

}


export default Cards;