import styled from "styled-components";

export const StyledExternalLink = styled.div`

    background-color: var(--color-grey-0);
    border-radius: var(--border-radius-default);
     
    a{
        display: flex;
        flex-direction: row;
        gap: 5px;
        align-items: center;
        justify-content: center;

        padding: 10px;
        border: 1px solid var(--color-grey-100);
        border-radius: var(--border-radius-default);
        color: var(--color-grey-900);
        transition: 400ms;
    }

    h2{
        font-size: var(--title-size-medium);
    }
    &&:hover{
        a{
            color: var(--color-primary);
        }
    }
`;