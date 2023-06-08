import styled from "styled-components";

export const StyledLoginForm = styled.div`

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
`;