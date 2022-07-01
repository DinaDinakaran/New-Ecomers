import React, { useState } from "react";
import Nav from "./component/navbar/nav"
import Cutout from "./component/banner/cutout"
import "./containerstyle.css"

import Component from "./component/porducts/component";



 


const product=[
    {id:0,name:"google pixel 3",price:52000,picture:"https://cdn.dxomark.com/wp-content/uploads/medias/post-24749/googlepixel3-1024x768.jpg",discribtion:"4gb Ram, 64gb Rom",rating:"5" },
    {id:1,name:"samsung galaxy note 10",price:50000,picture:"https://m.media-amazon.com/images/I/71JJB8w5erL._SL1500_.jpg",rating: 4.2,discribtion:"4gb Ram, 64gb Rom"}

]

function Final(){
    const [cart,setcart]=useState([])
    
const handlecart= (prod)=>{
    setcart([...cart,prod])
}
const handleremove =(id)=>{
    let arry= [...cart]
     arry.splice(id,1);
     setcart(arry)
}


    return(
        <>
        <Nav cart={cart} />
      
        <Cutout/>
        <div className="flax-container">
        {product.map((prod,i)=> 
        <div key={i}>
        <Component product= {prod} handlecart={handlecart} handleremove={handleremove}  />
        </div>     
        )}
        
        </div>

        </>
    )
}
export default Final;