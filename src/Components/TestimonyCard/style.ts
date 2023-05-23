import styled from "styled-components";

export const  StyledTestimonyCard = styled.div`

    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: var(--border-radius-default);

    padding-bottom: 50px;
    iframe{
        border-radius: 30px;
    }
    @media (max-width:1023px) {
        display: flex;

        background-color: transparent;
    }

`;