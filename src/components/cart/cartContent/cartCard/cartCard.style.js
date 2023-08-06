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
    color: rgb(15,15,15);
    font-weight: 700;
`
export const ProductControlerConteinerStyle = styled.div`
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
`

export const ProductControlerStyle = styled.div`
    display: flex;
    width: 50%;
`

export const ProductPriceStyle = styled.div`
    width: 50%;
    color: rgb(15,15,15);
    font-weight: 600;
    `

export const ButtonControler = styled.button`
    background-color: rgb(120,120,120);
    width: 1.2rem;
    border: none;
    cursor: pointer;
    border: 1px solid black;
    height: 1.2rem;

`
export const QuantityDisplay = styled.input`
    width: 2rem;
    text-align: center;
    background-color: white;
    border: none;
    border-bottom: 1px solid black;
    border-top: 1px solid black;
    outline: none;

`
