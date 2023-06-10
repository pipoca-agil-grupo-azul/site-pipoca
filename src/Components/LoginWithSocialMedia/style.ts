import styled from "styled-components";

export const StyledLoginWithSocialMedia = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-top: 30px;
    gap: 20px;
    button{
        border-radius: 24px;
        border: 1px solid transparent;

        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;

        min-width: 100%;
        min-height: 42px;
        transition: 400ms;
        font-family: 'Roboto', sans-serif;
    }
    .btn-linkedin-login{
        color: var(--color-grey-0);
        background-color: #2A66BC;

    }

    button:hover{
       transform:scale(1.05);
       box-shadow: 1px 1px 6px 0px rgba(0,0,0,0.5);
    }
`;