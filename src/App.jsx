import { createContext, useState } from 'react'
import Header from './components/header/header'
import IndexPage from './pages/index/index'
import React from "react";

export const Context = createContext()

function App() {
  const [cartList, setCartList] = useState([{
    _id: 1,
    id: 4,
    image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
    price: 19,
    title: "Mens Casual",
    quantity: 5},
  
    {
      _id: 2,
      id: 5,
      image: "https://fakestoreapi.com/img/71-3HjGNDUL._AC_SY879._SX._UX._SY._UY_.jpg",
      price: 10,
      title: "Men",
      quantity: 2}
  ])


  return (
    <Context.Provider value={{cartList, setCartList}}>
      <IndexPage/>
    </Context.Provider>
  )
}

export default App
