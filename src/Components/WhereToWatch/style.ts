import styled from "styled-components";

export const StyledWhereToWatch = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
  
    padding: 10px;
    
    @media (max-width:1023px) {
        display: grid;
        flex-direction: column;

        h2{
            font-size: var(--title-size-small-screens);
        }
    }
`;