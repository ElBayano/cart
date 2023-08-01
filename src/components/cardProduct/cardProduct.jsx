import React from "react";
import { CardProductStyle } from "./cardProduct.style";
import image from '/bag.jpg'

function CardProduct({img, name, price}) {

    function Click() {console.log("clicou")}
    return(
        <CardProductStyle>
            <ul>
                <li className="productImage"><img src={img} alt="" /></li>
                <li className="productName"> <h3> {name}</h3> </li>
                <li className="productPrice">R$ {price}</li>
                <li className="buttonAddToCart" ><button onClick={Click}>Adicionar ao carrinho</button> </li>
            </ul>
        </CardProductStyle>
    )
}

export default CardProduct