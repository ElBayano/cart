import React, { useContext, createContext } from 'react';
import {CartStyle} from './cart.style.js'
import { Context } from '../../App.jsx';
import CartHeader from './cartHeader/cartHeader.jsx';
import CartContent from './cartContent/cartContent.jsx';

function Cart() {
    const {cartList, setCartList} = useContext(Context)
    return (
        <>
            <CartStyle>
                <CartHeader>Seu carrinho tem {cartList.length} produtos</CartHeader>
            <CartContent CartList={cartList} SetCartList={setCartList}></CartContent>
            </CartStyle>

        </>
    )
}


export default Cart