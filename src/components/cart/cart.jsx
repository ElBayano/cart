import React, { useContext, createContext } from 'react';
import {CartStyle} from './cart.style.js'
import { Context } from '../../App.jsx';
import CartHeader from './cartHeader/cartHeader.jsx';

function Cart() {
    const {cartList, setCartList} = useContext(Context)
    return (
        <CartStyle>
            <CartHeader>Seu carrinho tem {cartList.length} produtos</CartHeader>
        </CartStyle>
    )
}


export default Cart