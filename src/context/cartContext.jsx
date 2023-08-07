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
          title: "Mens Casual",
          quantity: 1
        },

        {
          id: 2,
          image:
          "https://fakestoreapi.com/img/71li-ujtlUL._AC_UX679_.jpg",
          price: 19,
          title: "Mens Casual",
          quantity: 1
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

      const changeQuantity = (item, index, quantity) => {
        const newItem = {...item, quantity: quantity}
        const newList = cartList
        quantity >1 ? newList.splice(index,1, newItem):  newList.splice(index, 1)
        console.log(newList)
        setCartList(newList)
      }


      return (
        <CartContext.Provider value={{cartList, removeProduct, addToCart, changeQuantity}}>
            {children}
        </CartContext.Provider>
      )


}

export const useCart = () => useContext(CartContext)
