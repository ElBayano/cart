import React, { useContext, createContext } from 'react';
import {CartStyle} from './cart.style.js'
import { Context } from '../../App.jsx';
import CartHeader from './cartHeader/cartHeader.jsx';
import CartContent from './cartContent/cartContent.jsx';

function Cart({products}) {
    const {cartList, setCartList} = useContext(Context)
    return (
        <>
            <CartStyle>
                <CartHeader>Seu carrinho tem {cartList.length} produtos</CartHeader>
            {cartList.map((item, index) => <CartContent 
                key={item._id}
                id={item.id}
                image={item.image}
                price={item.price}
                quantity={item.quantity}
                title={item.title}
                _id={index}              
                cartList={cartList}
                setCartList={setCartList}>
                    
                </CartContent>)}
            </CartStyle>

        </>
    )
}


export default Cart