import CardProduct from "../../components/cardProduct/cardProduct";
import { api } from "../../api/api";
import { useEffect, useState } from "react";

function IndexPage() {
    
    const [product, setProduct] = useState([])

    const DownloadProduct = () => { api.get('products?limit=5').then(res => setProduct(res.data)) }

    useEffect(() => {
        DownloadProduct()
        console.log(product)
    }, [])

    return(<>
    {/* <CardProduct name={product.title} price={product.price} img={product.image}/> */}
        {product.map(item => <CardProduct key={item.id} name={item.title} price={item.price} img={item.image} /> )}
        </>
)
}

export default IndexPage