import styled from 'styled-components'

export const CartCardStyle = styled.div`
    background-color: #000;
    background-color:white;
    border: 1px black solid;
    border-radius: 12px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-left: 1rem;
    padding-right: 1rem;
    height: 10rem;
    text-align: center;

    img{
        width: 100px;
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

export const ProductTitleStyle = styled.p`
    color: black;
`
export const ProductControlerConteinerStyle = styled.div`
    background-color: blue;
    width: 100%;
    height: 6rem;
    display: flex;
    justify-content: space-between;
    align-items: center
`

export const ProductControlerStyle = styled.div`
    width: 50%;
`

export const ProductPriceStyle = styled.div`
    width: 50%;
    `