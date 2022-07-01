import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Final from "./final";
import Cart from "./component/navbar/cart"


function Main() {
    return (
        <Router>
            <Routes>
                <Route path="/cart" element={<Cart/>} />
                <Route path="/" element={<Final />} />
            </Routes>
        </Router>
    )
}
export default Main;