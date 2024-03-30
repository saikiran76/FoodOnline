import { useDispatch } from "react-redux";
import { addItem } from "../utils/cartSlice";


const IMGS_LINK ="https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/";

const ItemList = ({items}) =>{
    const dispatch = useDispatch();

    const handleAddItems = (item) =>{
        dispatch(addItem(item));

    }

    return(
        <div className="font-martelsans w-6/12 mx-auto p-2 bg-gray-100">
            {items.map(item=>(
                <div key = {item.card.info.id}>
                    <div className="p-2 flex justify-between">
                        <div>
                            <span className="font-bold pr-2">{item.card.info.name}</span>
                        </div>
                        
                        <div className="relative">
                            <img className="h-24 w-32 rounded-md" src = {IMGS_LINK + item.card.info.imageId} />
                            <div className="absolute top-1">
                                <button className="font-bold font-martelsans border border-red-400 rounded-sm p-1 m-auto bg-black text-white" onClick={()=>{
                                    handleAddItems(item.card)
                                }}>Add +</button>
                            </div>
                        </div>
                    </div>
                
                    <div className="text-sm p-2">
                        <p className="">{item.card.info.description}</p>
                    </div>
                    <hr className="border border-gray-200"></hr>
                </div>
            ))}
        </div>
    )

}

export default ItemList;