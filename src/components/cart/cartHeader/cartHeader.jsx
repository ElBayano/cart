import React from "react";
import {CartHeaderStyle} from './cartHeader.style.js'

function CartHeader({children}) {
    return(
        <CartHeaderStyle>
            {children}
        </CartHeaderStyle>
    )
}

export default CartHeader