import React from "react";
import { CartCardStyle, ProductTitleStyle, SideStyle, ProductControlerConteinerStyle, ProductControlerStyle, ProductPriceStyle } from "./cartCard.style";

function CartCard() {
    return(
        <CartCardStyle>
            <img src="https://fakestoreapi.com/img/81fPKd-2AYL._AC_SL1500_.jpg"/>

            <SideStyle>
                <ProductTitleStyle> 
                        Nome do produto aqui
                </ProductTitleStyle>

                <ProductControlerConteinerStyle>

                    <ProductPriceStyle>
                        R$ 1990.00
                    </ProductPriceStyle>

                    <ProductControlerStyle>
                        - 2 +
                    </ProductControlerStyle>
                </ProductControlerConteinerStyle>
            </SideStyle>
        </CartCardStyle>
    )
}

export default CartCard