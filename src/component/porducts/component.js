import React, { useState } from "react";
import "./componentstyle.css";





function Component({product,handlecart,handleremove}) {
    const {name,picture,price,rating,discribtion,id }= product;
    const [name1,usename1]= useState("Add to Cart")
    const handlecartvalue= (product,id)=>{
        
    switch(name1){
        case "Remove a Cart":
            handleremove(id);
            usename1("Add to Cart")
            break;
        case "Add to Cart":
            handlecart(product)
            usename1("Remove a Cart")
            break;
       
            default:
                console.log("error")
    }
       

    }
    return (
    <>
    <div>
        <div className="flex-item" >
            <img className="product-img" src={picture}alt="google pixel 3"/>
            <div>
                <div className="name">{name}</div>{' '}
                <div className="discrib">{discribtion}</div>{' '}
                <div className="price">Price RS: {price}</div>{' '}
                <div className="rating">Rating:{rating} Stars</div>{' '}
                <button className="cart1" onClick= {()=>handlecartvalue(product,id)} >{name1}</button>
               
                

            </div>

        </div>
       
        
    </div>


    </>

    )
}
export default Component;