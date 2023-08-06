
export function utils(cartList,setCartList, index, increse = true) {

    let newList = [...cartList]
    newList = newList.filter((item) =>  item._id != index)
    // setCartList(newList)
   console.log(newList)
    
}