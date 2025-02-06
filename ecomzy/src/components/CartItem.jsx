/* eslint-disable react/prop-types */
import { AiOutlineDelete } from "react-icons/ai";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { remove} from "../redux/Slices/CartSlices";
const CartItem = ({item}) => {
  const dispatch = useDispatch();
  function removeFromCart(){
    dispatch(remove(item.id));
    toast.error("Item removed");
  }
  return (
    <div className="w-[550px] mb-15 mt-7 border-b-2">
      <div className="flex gap-10">
        <div>
          <img className="w-[150px]" src={item.image} alt={item.title}/>
        </div>
        <div>
          <h1 className="text-xl font-bold mb-4 text-[#2A4B44]">{item.title}</h1>
          <h1 className="font-normal text-sm  mb-4">{item.description.substr(0,100)}</h1>
          <div className="flex justify-between" onClick={removeFromCart}>
          <h1 className=" text-xl mb-8 text-[#23A14C] font-semibold">${item.price}</h1>
          <div className="flex items-center justify-center bg-red-200 rounded-full w-8 h-8">
        <AiOutlineDelete className="text-red-700"/>
          </div>
        </div>
        </div>
        
      </div>
    </div>
  )
}

export default CartItem