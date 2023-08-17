import React from "react";
import { CardProductStyle } from "./cardProduct.style";
import { useCart } from "../../context/cartContext";

function CardProduct({image, title, price, id}) {
    const {addToCart} = useCart()
    const Click= ()=>addToCart(product)

    
    let product = {id: id, image: image, price: price, title: title, quantity: 1}
    return(
        <CardProductStyle>
            <ul>
                <li className="productImage"><img src={image} alt="" /></li>
                <li className="productName"> <h3> {title}</h3> </li>
                <li className="productPrice">R$ {price}</li>
                <li className="buttonAddToCart" ><button onClick={Click}>Adicionar ao carrinho</button> </li>
            </ul>
        </CardProductStyle>
    )
}

export default CardProduct