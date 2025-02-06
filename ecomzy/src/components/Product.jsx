/* eslint-disable react/prop-types */
import { useDispatch, useSelector } from "react-redux"
import {toast} from "react-toastify"
import {add,remove} from "../redux/Slices/CartSlices.js"
const Product = ({post}) => {
  const {cart} = useSelector((state)=>state);
  const dispatch = useDispatch();
  function addToCart(){
    dispatch(add(post));
    toast.success("Item added to cart");
  }
  function removeFromCart(){
    dispatch(remove(post.id));
    toast.error("Item removed");
  }
  return (
    <div className="max-w-[300px] bg-white rounded-2xl justify-center mb-10 items-center gap-5 p-5 mt-10 ml-2 flex flex-col hover:scale-110 shadow-2xl shadow-blue-500/20 transition-all duration-500 ease-in-out">
  <div className="w-full flex flex-col items-center justify-center ">
    <p className="text-[#2A4B44] mb-1 font-semibold text-lg text-left truncate w-full mt-1">{post.title}</p>
  </div>
  <div className="w-full">
    <p className="font-normal text-xs text-left w-full">{post.description.substr(0,65) + "..."}</p>
  </div>
  <div className="flex justify-center mt-2">
    <img src={`${post.image}`} className="h-[150px] object-contain" />
  </div>
  <div className="flex justify-between items-center w-full mt-6">
    <p className="text-[#23A14C] font-semibold">${post.price}</p>
    {
      cart.some((p) => p.id === post.id) ? (
        <button className="border-2 border-[#2A4B44] rounded-full uppercase font-semibold text-xs py-1 px-3 hover:bg-[#2A4B44] hover:text-[#A8DAB4] transition-all duration-400" onClick={removeFromCart}>Remove Item</button>
      ) : (
        <button className="border-2 border-[#2A4B44] rounded-full uppercase font-semibold text-xs py-1 px-3 hover:bg-[#2A4B44] hover:text-[#A8DAB4] transition-all duration-400" onClick={addToCart}>Add to Cart</button>
      )
    }
  </div>
</div>
  )
}

export default Product