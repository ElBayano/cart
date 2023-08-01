import styled from 'styled-components'

export const CardProductStyle = styled.div`
    width: 15rem;
    background-color: white;
    border-radius: 1.5rem;
    margin: 0.5rem;
    padding-bottom: 1rem;
    height: 450px;
    box-shadow: 1px 2px 10px -4px black;
    

    > ul {
        padding: 0.8rem;
        color: black;
        font-size: 0.9rem;
        list-style: none;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: space-between;
        height: 100%;

        

        li {
            text-align: center;
        }

        > li h3 {
            font-size: 0.8rem;
        }

        button {
            width: 7rem;
            padding: 0.5rem;
            border-radius: 3px;
            cursor: pointer;
            border: none;
            transition: all .05s; 
            background-color: #4CAF50;
            color: #fff;
            font-weight: 600;
            font-family: "Inter", sans-serif;

            &:active, &:hover{
                background-color: #43A047;
            }
        }
        
    }
    
    img {
        margin-top: 1rem;
        height: 14rem;
        max-width: 13.1rem;
    }
    
`