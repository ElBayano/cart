import React from "react";
import { CartContentSyle } from "./cartContent.style";
import CartCard from "./cartCard/cartCard";


function CartContent(props) {
    return(
        <CartContentSyle >
            <CartCard props={props}/>
        </CartContentSyle>
    )
}

export default CartContent