import { createContext, useState } from 'react'
import Header from './components/header/header'
import IndexPage from './pages/index/index'
import React from "react";

export const Context = createContext()

function App() {
  const [cartList, setCartList] = useState([1,2,3,4])


  return (
    <Context.Provider value={{cartList, setCartList}}>
      <IndexPage/>
    </Context.Provider>
  )
}

export default App
