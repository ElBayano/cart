import React, { useContext, useEffect, useState } from "react";
import {
  CartCardStyle,
  ProductTitleStyle,
  SideStyle,
  ProductControlerConteinerStyle,
  ProductControlerStyle,
  ProductPriceStyle,
  ButtonControler,
  QuantityDisplay,
} from "./cartCard.style";

import { useCart } from "../../../../context/cartContext";

function CartCard({item, index}) {
  const {cartList, addToCart, changeQuantity, removeProduct} = useCart()

  const Increase = ()=> {
    const itemQuantity = cartList[index].quantity + 1
    console.log("CartCard Quantity", itemQuantity)
    changeQuantity(cartList[index], index, itemQuantity )
  }

  const Decrease = ()=> {
    const itemQuantity = cartList[index].quantity - 1
    console.log("CartCard Quantity", itemQuantity)
    changeQuantity(cartList[index], index, itemQuantity )
  }


  return (
    <CartCardStyle>
      <img src={item.image} alt="" />

      <SideStyle>
        <ProductTitleStyle>{item.title}</ProductTitleStyle>

        <ProductControlerConteinerStyle>
          <ProductPriceStyle>R$ {item.price * item.quantity}</ProductPriceStyle>

          <ProductControlerStyle>
            <ButtonControler onClick={Decrease}>-</ButtonControler>

            <QuantityDisplay type="text" value={cartList[index].quantity} onChange={()=>{console.log("Change", cartList[index])}}/>

            <ButtonControler onClick={Increase}>+</ButtonControler>
            
          </ProductControlerStyle>
        </ProductControlerConteinerStyle>
      </SideStyle>
    </CartCardStyle>
  );
}

export default CartCard;
