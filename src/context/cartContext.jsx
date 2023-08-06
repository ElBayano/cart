import React, { createContext, useContext, useState} from "react";
import Cart from "../components/cart/cart";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([
        {
          id: 4,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          price: 19,
          title: "Mens Casual"
        },

        {
          id: 2,
          image:
            "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
          price: 19,
          title: "Mens Casual"
        }

      ]
      )

      const addToCart = (product) => {
        setCartList([...cartList, product])
      }

      const removeProduct = (index) => {
        const newCartList = [...cartList]
        setCartList(newCartList.splice(index,1))
      }

      return (
        <CartContext.Provider value={{cartList, removeProduct, addToCart}}>
            {children}
        </CartContext.Provider>
      )


}

export const useCart = () => useContext(CartContext)
