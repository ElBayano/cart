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

function CartCard({item, index, setList}) {
  const {cartList, addToCart, changeQuantity} = useCart()
  
  const [productQuantity, setProductQuantity] = useState(cartList[index].quantity)

  const increaseQuantity = () => {
    setProductQuantity((previus)=> previus+1)
    changeQuantity(item, index, productQuantity)
    console.log(productQuantity)
    console.log(item)
    console.log(index)
    setList(cartList)
  }
  const decreaseQuantity = () => {
    console.log("ok")
    setProductQuantity(productQuantity-1)
    changeQuantity(item, index, productQuantity)
  }


  return (
    <CartCardStyle>
      <img src={item.image} alt="" />

      <SideStyle>
        <ProductTitleStyle>{item.title}</ProductTitleStyle>

        <ProductControlerConteinerStyle>
          <ProductPriceStyle>R$ {item.price * productQuantity}</ProductPriceStyle>

          <ProductControlerStyle>
            <ButtonControler onClick={decreaseQuantity}>-</ButtonControler>

            <QuantityDisplay value={productQuantity}/>

            <ButtonControler onClick={increaseQuantity}>+</ButtonControler>
            
          </ProductControlerStyle>
        </ProductControlerConteinerStyle>
      </SideStyle>
    </CartCardStyle>
  );
}

export default CartCard;
