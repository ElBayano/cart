import axios from "axios";


export const api = axios.create({
    baseURL: 'https://fakestoreapi.com/'
})
// export const api = axios.create({
//     baseURL: 'https://api.mercadolibre.com/sites/MLB/search?q=camiseta'
// })

