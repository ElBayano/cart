import styled from 'styled-components'

export const CardProductStyle = styled.div`
    width: 15rem;
    background-color: rgb(150,150,150);
    border-radius: 0 0 30px 30px;
    margin: 0.5rem;
    padding-bottom: 1rem;

    > ul {
        color: black;
        font-size: 0.9rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        gap: 0.25rem;

        button {
            width: 7rem;
            padding: 0.5rem;
            border-radius: 8px;
            cursor: pointer;
            border: none;
            transition: all .1s; 

            &:active{
                background-color: red;
            }
        }
        
    }
    
    img {
        margin-top: 1rem;
        height: 14rem;
    }
    
`