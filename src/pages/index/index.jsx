import CardProduct from "../../components/cardProduct/cardProduct";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

function IndexPage() {
    
    const [product, setProduct] = useState([])
    const [ productLimit, setProdutctLimit ] = useState(4)
    const DownloadProduct = () => { api.get(`products?limit=${productLimit}`).then(res => setProduct(res.data)) }
    const newLimit = (event) => {setProdutctLimit(event.target.value)}

    useEffect(() => {
        DownloadProduct()
    }, [])

    useEffect(() => {
        DownloadProduct()
    }, [productLimit])

    

    return(
        <>
            <select onChange={newLimit} >
                <option value="4" >4</option>
                <option value="6" >6</option>
                <option value="10" >10</option>
                <option value="20" >20</option>
            </select>
            {product.map(item => <CardProduct 
                        key={item.id}
                        name={item.title}
                        price={item.price}
                        img={item.image} />)}
        </>)
}

export default IndexPage