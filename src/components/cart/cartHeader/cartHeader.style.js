import styled from "styled-components";

export const CartHeaderStyle = styled.div`
    font-size: 1rem;
    display: flex;
    gap: 2rem;
    justify-content: flex-end;
    align-self: flex-end;
    border-bottom: 1px solid rgba(80,80,80,0.8);
    display: flex;
    align-items: center;
    padding: 0.4rem;
    width: 100%;
`

export const CartCloseButtonStyle = styled.button`
    border: none;
    background-color: rgba(255,255,255,1);
    width: 1.5rem;
    height: 1.5rem;
    border-radius: 50%;
    font-weight: 600;
    cursor: pointer;
    transition: all .1s;

    &:hover{
        background-color: rgba(255,255,255,.8)
    }
`