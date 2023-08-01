import React from "react";
import { CardProductStyle } from "./cardProduct.style";
import image from '/bag.jpg'

function CardProduct() {

    function Click() {console.log("clicou")}
    return(
        <CardProductStyle>
            <ul>
                <li className="productImagr"><img src={image} alt="" /></li>
                <li className="productName"> <h3>Nome do produto</h3> </li>
                <li className="productPrice">RS 19,90</li>
                <li className="buttonAddToCart" ><button onClick={Click}>Adicionar ao carrinho</button> </li>
            </ul>
        </CardProductStyle>
    )
}

export default CardProduct