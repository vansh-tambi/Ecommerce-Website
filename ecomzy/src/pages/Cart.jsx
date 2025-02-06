import { useSelector } from "react-redux"
import { Link } from "react-router-dom"
import CartItem from "../components/CartItem"
import { useEffect, useState } from "react"
const Cart = () => {
  const cart = useSelector((state) => state.cart);
  const [totalAmount, setTotalAmount] = useState(0);
  useEffect(() => {
    setTotalAmount(cart.reduce((acc,curr) => acc + curr.price,0));
  },[cart])
  return (
    <div className="bg-white">
      {
        cart.length > 0 ? (
          <div className="flex justify-center gap-x-25">
          <div className="">
            {
              cart.map((item, index) => {
                return <CartItem key={item.id} item={item} itemIndex = {index}/>
              })
            }
          </div>
          <div>
          <div className="mt-10">
            <div className="text-[#5CCF72] text-3xl font-semibold">Your Cart</div>
            <div className="text-6xl font-bold text-[#5CCF72] mb-4">Summary</div>
            <p><span className="font-semibold text-2xl">Total items: {cart.length}</span></p>
          </div>
          <div className="mt-80 flex flex-col gap-y-6 items-center justify-center">
            <p className="text-2xl ">Total Amount: <span className="font-bold">${totalAmount}</span></p>
            <button className="hover:bg-[#D9F1DF] border-2 border-[#5CCF72] transition-all duration-500 bg-[#5CCF72] w-full py-3 rounded-md text-[#2A4B44] text-xl font-bold cursor-pointer" >Checkout Now</button>
          </div>  
          </div>
          
        </div>) : (<div className="gap-y-6 flex h-[100vh] items-center justify-center flex-col"><h1 className="font-bold text-2xl text-[#5CCF72]">Cart is empty</h1>
        <Link to="/"><button className="px-3 border-2 border-[#5CCF72] hover:bg-[#D9F1DF] transition-all duration-500 bg-[#5CCF72] w-full py-3 rounded-md text-[#2A4B44] text-xl font-bold cursor-pointer">Shop Now</button></Link></div>)
      }
    </div>
  )
}

export default Cart