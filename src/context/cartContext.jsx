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

      const decreaseQuantity = (item, index) => {
        const newInfoProduct = {...item, quantity: item.quantity - 1}
        const newProductList = cartList
        newProductList.splice(index, 1, newInfoProduct)
        setCartList(newProductList)
        console.log(newInfoProduct)

        return(newInfoProduct.quantity)
      }

      const increaseQuantity = (item, index) => {
        const newQuantity = item.quantity + 1
        const newProduct = {...item, quantity: newQuantity}
        let newList = cartList

        newList.splice(index, 1, newProduct)
        setCartList(newList)
        console.log(newList[index].quantity)
        return(newList[index].quantity)

       }


      return (
        <CartContext.Provider value={{cartList, removeProduct, addToCart, increaseQuantity, decreaseQuantity}}>
            {children}
        </CartContext.Provider>
      )


}

export const useCart = () => useContext(CartContext)
