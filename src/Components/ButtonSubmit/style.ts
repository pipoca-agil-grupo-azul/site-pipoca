import styled from "styled-components";

export const StyledButton = styled.button`
        border: 1px solid transparent;
        outline: none;
        border-radius: 24px;
        color: var(--color-grey-0);
        background-color: var(--color-primary);
        padding: 10px;
        font-weight: 500;
        font-family: 'Poppins', sans-serif;
        transition: 400ms;
    &&:hover{
        box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.5);
        background-color: #FFCC33;
        color: var(--color-primary);
        border: 1px solid var(--color-primary);
    }
`;