import React from "react";
import { CartCardStyle, ProductTitleStyle, SideStyle, ProductControlerConteinerStyle, ProductControlerStyle, ProductPriceStyle , ButtonControler, QuantityDisplay } from "./cartCard.style";

function CartCard({props}) {
    
    const {image , title, quantity, price, cartList, setCartList} = props
    const increaseQuantity = ()=> { return console.log([...cartList])}
    return(
        <CartCardStyle>
            <img src={image} alt=""/>
            
            <SideStyle>
                <ProductTitleStyle> 
                        {title} 
                </ProductTitleStyle>

                <ProductControlerConteinerStyle>

                    <ProductPriceStyle>
                        R$ {price * quantity}
                    </ProductPriceStyle>

                    <ProductControlerStyle>                        
                        <ButtonControler>-</ButtonControler>
                        <QuantityDisplay defaultValue={quantity}/>
                        <ButtonControler onClick={increaseQuantity}>+</ButtonControler>
                    </ProductControlerStyle>
                    
                </ProductControlerConteinerStyle>
            </SideStyle>
        </CartCardStyle>
    )
}

export default CartCard