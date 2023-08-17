import React, { createContext, useContext, useState} from "react";
import Cart from "../components/cart/cart";

export const CartContext = createContext([])

export const CartProvider = ({children}) => {
    
    const [cartList, setCartList] = useState([])

      const addToCart = (product) => {
        let item = cartList.filter((item)=>{item.id})
        console.log(item)
        setCartList([...cartList, product])
      }

      const removeProduct = (index) => {
        const newCartList = [...cartList]
        setCartList(newCartList.filter((item, i) => index != i))
        console.log("removeProduct")
      }

      const changeQuantity = (item, index, quantity) => {
        const newItem = {...item, quantity: quantity}
        let newList = cartList
        quantity >= 1 ? newList.splice(index,1, newItem):  newList.splice(index, 1)
        console.log(cartList)
        setCartList(newList)
      }


      return (
        <CartContext.Provider value={{cartList, removeProduct, addToCart, changeQuantity}}>
            {children}
        </CartContext.Provider>
      )


}

export const useCart = () => useContext(CartContext)
