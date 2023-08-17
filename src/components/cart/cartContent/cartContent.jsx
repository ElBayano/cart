import React, { useContext, useEffect, useState } from "react";
import { CartContentSyle } from "./cartContent.style";
import CartCard from "./cartCard/cartCard";

import { useCart } from "../../../context/cartContext";

function CartContent() {
    const {cartList} = useCart()
    console.log("CartContext Atualizado com sucesso")


    console.log(cartList)

    return(
        <CartContentSyle >
            {cartList.length}
            {cartList.map((item, index)=>{return <CartCard key={index} item={item}  index={index} />})}
        </CartContentSyle>
    )
}

export default CartContent