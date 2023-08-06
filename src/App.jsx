import { createContext, useState } from "react";
import Header from "./components/header/header";
import IndexPage from "./pages/index/index";
import React from "react";

import {CartProvider} from './context/cartContext'

function App() {



  return (
    <CartProvider>
      <IndexPage />
    </CartProvider>
  );
}

export default App;
