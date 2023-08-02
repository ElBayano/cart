import React from "react";
import {CartHeaderStyle, CartCloseButtonStyle} from './cartHeader.style.js'

function CartHeader({children}) {
    const closeCart = () => {console.log("fechar")}
    return(
        <CartHeaderStyle>
            {children}
            <CartCloseButtonStyle onClick={closeCart}>X</CartCloseButtonStyle>
        </CartHeaderStyle>
    )
}

export default CartHeader