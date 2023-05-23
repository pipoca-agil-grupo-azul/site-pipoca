import styled from "styled-components";

export const StyledSubscribe = styled.div`

    display: flex;
    align-items: center;
    justify-content: center;

    
    margin: 0 auto;

    width: fit-content;

    background-color: #F3E857;
    background-image: linear-gradient(#FDF2A4,#F3E857);
    width: 100%;
    padding: 50px;
    
    
    h2{
        font-size: var(--title-size-small);
        align-self: center;
        font-family: 'Poppins', sans-serif;
        font-weight: 700;
    }
    @media (max-width:1023px) {
        display: grid;
        flex-direction: column;

        h2{
            font-size: var(--title-size-small-screens);
        }
    }
`;