import styled from "styled-components";

export const StyledHighlightedList = styled.ul`

    width: 80vw;

    margin: 0 auto;
    font-family: var(--font-family-2);

    @media (max-width:1023px) {
        width: 100%;
        position: relative;
        left: -40px;
        margin-top: 20px;
    }
`;