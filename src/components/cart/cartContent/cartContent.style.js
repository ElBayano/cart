import styled from "styled-components";

export const CartContentSyle = styled.div`
    width: 90%;
    height: 100%;
    padding-top: 1rem;
    display: flex;
    flex-direction: column;
    gap: 2rem;
    
    overflow-y: auto;
    &::-webkit-scrollbar {
  display: none;
}    
`