import styled from "styled-components";

export const  StyledTestimonyCard = styled.div`

    display: flex;
    flex-direction: column;
    gap: 20px;
    border-radius: var(--border-radius-default);

    padding: 20px 20px 50px 20px;
    
    iframe{
        border-radius: 30px;
        position: relative;
        z-index: 3;
    }
    .red-details{
        position: absolute;
        top: 0px;
        left: 0px;
        z-index: 2;
    }
    @media (max-width:1023px) {
        display: flex;

        background-color: transparent;
    }

`;