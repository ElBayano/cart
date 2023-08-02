import styled from 'styled-components'

export const CartCardStyle = styled.div`
    background-color: #000;
    background-color:white;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 10rem;
    text-align: center;
    gap: 1rem;
    box-shadow: 0px 2px 10px -5px rgba(0, 0, 0, 0.8);

    img{
        width: 5rem;
        max-height: 9rem;
    }
`

export const SideStyle = styled.div`
    width: 13rem;
    background-color: green;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
`

export const ProductTitleStyle = styled.div`
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
`
export const ProductControlerConteinerStyle = styled.div`
    background-color: blue;
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProductControlerStyle = styled.div`
    width: 50%;
`

export const ProductPriceStyle = styled.div`
    width: 50%;
    `

export const ButtonControler = styled.button`
    background-color: yellow;
    width: 1.2rem;
    border: none;
    cursor: pointer;
`
export const QuantityDisplay = styled.input`
    width: 2rem;
    text-align: center;
    background-color: white;
    border: none;
    outline: none;
`
