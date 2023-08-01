import styled from 'styled-components'

export const CardProductStyle = styled.div`
    width: 15rem;
    background-color: white;
    border-radius: 0 0 30px 30px;
    margin: 0.5rem;
    padding-bottom: 1rem;
    height: 450px;

    > ul {
        padding: 0.8rem;
        color: black;
        font-size: 0.9rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: flex-end;
        

        li {
            text-align: center;
        }

        > li h3 {
            font-size: 0.8rem;
        }

        button {
            width: 7rem;
            padding: 0.5rem;
            border-radius: 8px;
            cursor: pointer;
            border: 1px solid black;
            transition: all .1s; 
            box-shadow: 1px 2px 10px -5px black;

            &:active{
                background-color: red;
            }
        }
        
    }
    
    img {
        margin-top: 1rem;
        height: 14rem;
        max-width: 13.1rem;
    }
    
`