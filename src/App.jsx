import { useState } from 'react'
import Header from './components/header/header'
import IndexPage from './pages/index/index'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Header/>
    <IndexPage/>
    </>
  )
}

export default App
