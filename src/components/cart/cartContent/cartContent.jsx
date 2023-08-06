import React, { useContext, useEffect, useState } from "react";
import { CartContentSyle } from "./cartContent.style";
import CartCard from "./cartCard/cartCard";

import { useCart } from "../../../context/cartContext";

function CartContent() {

    const {cartList} = useCart()

    function renderCartList() {
      return  cartList.map((item, index)=>{return <CartCard key={index} item={{item}} />})
    }
    return(
        <CartContentSyle >
            {renderCartList()}
        </CartContentSyle>
    )
}

export default CartContent