import React, { useState } from "react";
import {Route,RouterProvider,createBrowserRouter,createRoutesFromElements } from "react-router-dom";

import Home from "./components/Home";
import Shop from "./components/Shop";
import Navlayout from "./components/Navlayout";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Cart from "./components/Cart";

function App() {

  const [cartItems,setCartItems]=useState([]);
  const [cartcount,setCartcount]=useState(0);

  function handdleAddbook(item){
    // console.log(cartItems.length)
    setCartcount(cartItems.length);
    setCartItems(olditem=>{
      // console.log(cartItems);
      return [...olditem,item]

    })
  }
  const route=createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Navlayout cartcount={cartcount}/>}>
        <Route index element={<Home/>} />
        <Route path="Shop" element={<Shop handdleAddbook={handdleAddbook}/>}/>
        <Route path="Login" element={<Login/>}/>
        <Route path="Signup" element={<Signup/>}/>
        <Route path="Cart" element={<Cart cartItems={cartItems}/>}/>
      </Route>
    )
  )

  return (
    <div className="App">
      <RouterProvider router={route}/>
    </div>
  );
}

export default App;
