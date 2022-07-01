import React from "react";
import "./cartstyle.css"




function Cart({cart}){
    console.log(cart)
    const {name,picture,price,rating,discribtion }= cart;
    return (
    <>
    <div className="flex-container">
        <div className="flex-item" >
            <img className="product-img" src={picture}alt="google pixel 3"/>
            <div>
                <div className="name">{name}</div>{' '}
                <div className="discrib">{discribtion}</div>{' '}
                <div className="price">Price RS: {price}</div>{' '}
                <div className="rating">Rating:{rating} Stars</div>{' '}
               
                

            </div>

        </div>
       
        
    </div>


    </>
    )
}

export default Cart;
