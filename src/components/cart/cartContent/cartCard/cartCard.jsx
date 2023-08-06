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

import { utils } from "./utils";

import { useCart } from "../../../../context/cartContext";

function CartCard({image, price, title, id }) {
  const {cartList} = useCart()

  const increaseQuantity = () => {};


  const decreaseQuantity = () => {};

  return (
    <CartCardStyle>
      <img src={image} alt="" />

      <SideStyle>
        <ProductTitleStyle>{title}</ProductTitleStyle>

        <ProductControlerConteinerStyle>
          <ProductPriceStyle>R$ </ProductPriceStyle>

          <ProductControlerStyle>
            <ButtonControler onClick={decreaseQuantity}>-</ButtonControler>
            <QuantityDisplay />
            <ButtonControler onClick={increaseQuantity}>+</ButtonControler>
          </ProductControlerStyle>
        </ProductControlerConteinerStyle>
      </SideStyle>
    </CartCardStyle>
  );
}

export default CartCard;
