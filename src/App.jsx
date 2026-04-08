import React, { useState } from "react";
import Header1 from "./Components/Header1";
import Header2 from "./Components/Header2";
import HeroImage from "./Home/HeroImage";
import Featured from "./Home/Featured";
import Banner from "./Home/Banner";
import Popular from "./Home/Popular";
import DailyBest from "./Home/DailyBest";
import Details from "./Home/Details";
import Footer from "./Components/Footer";
import Signup from "./Home/Signup";
import Home1 from "./Home/Home1";
import Home2 from "./Home/Home2";
import { Routes, Route } from "react-router-dom";
import Stores from "./Home/Stores";
import Blogcart from "./Home/Blogcart";
import Aboutpages from "./Home/Aboutpages";
import Signin from "./Home/Signin";
import Cart from "./Home/Cart";
import AcctSignup from "./Home/AcctSignup";
import ShopGrid from "./Home/ShopGrid";

function App() {

  const [cart, setCart] = useState([]);   // ✅ GLOBAL CART STATE
  const [showCart, setShowCart] = useState(false);

  return (
    <Routes>

      <Route
        path="/"
        element={
          <>
            <Header1/>
            <Header2/>
            <HeroImage/>
            <Featured/>
            <Banner/>
            <Popular cart={cart} setCart={setCart} />  {/* ✅ */}
            <DailyBest/>
            <Details/>
            <Footer/>
          </>
        }
      />

      <Route path="/signup" element={<Signup />} />
      <Route path="/home1" element={<Home1/>} />
      <Route path="/home2" element={<Home2/>} />
      <Route path="/ShopGrid" element={<ShopGrid/>} />
      <Route path="/stores" element={<Stores/>} />
      <Route path="/blogcart" element={<Blogcart/>} />
      <Route path="/Aboutpages" element={<Aboutpages/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/signin" element={<Signin/>} />
      <Route path="/acctSignup" element={<AcctSignup/>} />

      {/* ✅ pass cart to cart page */}
      <Route path="/cart" element={<Cart cart={cart} setCart={setCart} />} />

    </Routes>

    
  );
}

export default App;