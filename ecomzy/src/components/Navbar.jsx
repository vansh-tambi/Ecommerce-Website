import {FaShoppingCart} from "react-icons/fa";
import Image from "./Image.png";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const {cart} = useSelector((state)=>state);
  return (
    <div>
        <div className="flex items-center h-15 max-w-6xl mx-auto justify-between ">
        <NavLink to="/">
        <div>
          <img src={Image} className="w-20 h-22 mt-2 ml-5"/>
        </div>
        </NavLink>
        
        <div className="flex items-center font-bold text-xl text-[#2A4B44] space-x-20">
            <NavLink to="/">
            <p>Home</p>
            </NavLink>

            <NavLink to="/cart">
            <div className="relative">
              <FaShoppingCart className="size-7"/>
              {
                cart.length > 0 && (<span className="absolute animate-bounce text-[#D9F1D5]  bg-[#23A14C] flex items-center justify-center rounded-full -top-3 text-xs -right-3 w-[20px] p-2 h-[20px]">{cart.length}</span>)
              }
              
            </div>
            </NavLink>
        </div>
        </div>
    </div>
  )
}

export default Navbar