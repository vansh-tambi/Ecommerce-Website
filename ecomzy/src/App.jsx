import './App.css'
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Cart from './pages/Cart';
function App() {

  
  return (
    <div className='bg-[#2A4B44]'>
      <div className='bg-[#D9F1DF]'>
        <Navbar/>
      </div>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/cart' element={<Cart/>} />
      </Routes>
    </div>
  )
}

export default App
