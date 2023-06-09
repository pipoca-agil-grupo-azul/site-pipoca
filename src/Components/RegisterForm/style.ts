import styled from "styled-components";

export const StyledRegisterForm = styled.div`

    padding: 30px;
    width: 500px;
    max-width: 90%;
    margin: 0 auto;

    form{
        display: flex;
        flex-direction: column;
        gap: 10px;

        border-radius: var(--border-radius-default);
    }
    
    p {
        color: var(--color-secondary);
    }
    input{
        border: 1px solid black;
        padding: 20px;
    }
    .divider{
        display: flex;
        align-items: center;
        text-align: center;
    }
    .divider .line {
        flex-grow: 0.5;
        height: 0.1px;
        background-color: #CDCFD2;
        }
    .divider .text{

    }
    
`;
