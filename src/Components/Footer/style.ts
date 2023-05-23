import styled from "styled-components";

export const StyledFooter = styled.footer`

    background-color: var(--color-primary-lighter);
    color: var(--color-grey-900);

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: var(--font-family-2);
    padding: 100px;

    position: relative;

    .logo-img{
        color: white;
        width: fit-content;
        padding: 20px;
        justify-self: center;
        align-self: center;
    }
    .information{
        display: flex;
        flex-direction: column;
        gap: 20px;
    }
    .information-div{
        display: flex;
        gap: 20px;
    }

    .newsletter{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }   
    .links-social-media-footer{
        display: flex;
        justify-content: space-evenly;
        align-items: center;
    }
    .links-social-media-footer img{
        cursor: pointer;
        transition: 400ms;
    }
    .links-social-media-footer img:hover{
        filter: brightness(0.4);
        transform: scale(1.1);
    }
    .submit-button-newsletter-footer{
        transition: 400ms;
    }
    .submit-button-newsletter-footer:hover{
        color: var(--color-primary);            
        background-color: #FFCC33;
    }

    form{
        display: flex;
        background-color: var(--color-grey-0);
        border-radius: 10px;
        padding: 4px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    }

    form input{
        padding: 5px;
        outline: none;
        border: none;
        border-radius: 10px;
    }
    form button{
        background-color: var(--color-primary);
        outline: none;
        border: none;
        color: var(--color-grey-0);
        padding: 10px;
        border-radius: 10px;
    }
    form button:hover{
        background-color: var(--color-secondary);
    }

    .bottom-footer{
        background-color: var(--color-grey-900);
        color: var(--color-grey-0);

        padding: 10px;
        width: 100vw;

        display: flex;
        justify-content: space-around;

        width: 100%;

        position: absolute;
        bottom: 0;
    }

    
    .terms-and-privacy{
        display: flex;
        gap: 20px;
    }
    a{
        color: var(--color-grey-0);
    }

    @media (max-width:1023px) {
        .terms-and-privacy{
            display: none;
        }
    }


    @media (max-width:1023px) {
       
        display: flex;
        flex-direction: column;
    }

`;