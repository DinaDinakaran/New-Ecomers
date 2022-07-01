import React from "react";
import {useNavigate}from "react-router-dom"


import "./style.css"




function Nav({cart}){
  const navigate = useNavigate();

  console.log(cart)
 
  const handlecartDetails= ()=>{

navigate("/cart")
  }
return(
   <>
  <div className="navheader" >
    <span className="brand">Mobile Blaza</span>
    <button className="attribute-one">Home</button>
    <button className="attribute-two">About</button>
    <button className="attribute-three">Shop</button>
    <button className="cart" onClick={()=>{handlecartDetails()}}>Cart({cart.length})</button>
  </div>
   </>
)
}
export default Nav;