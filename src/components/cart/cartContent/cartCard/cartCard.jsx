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
  const {cartList, addToCart, increaseQuantity, decreaseQuantity} = useCart()
  
  const [productQuantity, setProductQuantity] = useState(1)

  // const increaseQuantity = () => {
  //   addToCart({...item, quantity: item.quantity++})};


  return (
    <CartCardStyle>
      <img src={item.image} alt="" />

      <SideStyle>
        <ProductTitleStyle>{item.title}</ProductTitleStyle>

        <ProductControlerConteinerStyle>
          <ProductPriceStyle>R$ </ProductPriceStyle>

          <ProductControlerStyle>
            <ButtonControler onClick={() => {setProductQuantity(decreaseQuantity)}}>-</ButtonControler>

            <QuantityDisplay value={productQuantity}/>

            <ButtonControler onClick={() => {increaseQuantity(item, index); setProductQuantity(item.quantity)}}>+</ButtonControler>
            
          </ProductControlerStyle>
        </ProductControlerConteinerStyle>
      </SideStyle>
    </CartCardStyle>
  );
}

export default CartCard;
