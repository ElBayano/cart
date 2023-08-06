import React, { useContext } from 'react';
import {CartStyle} from './cart.style.js'
import CartHeader from './cartHeader/cartHeader.jsx';
import CartContent from './cartContent/cartContent.jsx';
import { useCart } from '../../context/cartContext.jsx'; 

function Cart() {
    const {cartList} = useCart()
    
    return (
        <>
            <CartStyle>
                <CartHeader>Seu carrinho tem {cartList.length} produtos</CartHeader>
            <CartContent/>
            </CartStyle>

        </>
    )
}


export default Cart