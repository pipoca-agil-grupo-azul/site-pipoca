import styled from "styled-components";

export const StyledFooter = styled.footer`

    background-color: var(--color-grey-900);

    display: flex;
    align-items: center;
    justify-content: space-around;

    font-family: var(--font-family-2);
    padding: 100px;

    position: relative;
    color: var(--color-grey-0);

    .container__newsletter{
        display: flex;
        flex-direction: column;
        gap: 10px;
    }
    .container__logo{
        display: flex;
        align-items: center;
        gap: 20px;
    }
    .container__logo img{
        width: 50px;
    }

    .submit-button-newsletter-footer{
        transition: 400ms;
    }
    .submit-button-newsletter-footer:hover{
        border: 1px solid var(--color-grey-0);
        color: var(--color-grey-0);
    } 

    form{
        display: flex;
        gap: 10px;
        box-shadow: 0 0 1px rgba(0, 0, 0, 0.4);
    }

    form input{
        padding: 25px;
        outline: none;
        border: 1px solid var(--color-grey-500);
        background-color: var(--color-grey-900);
        color: var(--color-grey-0);
    }
    form button{
        border:1px solid var(--color-primary);
        outline: none;
        background-color: var(--color-grey-900);
        color: var(--color-primary);
        padding: 20px;
    }

    .container__follow-us{
        margin-top: 20px;
        display: flex;
        flex-direction: column;
        gap: 20px;
    }   
    .links-social-media-footer{
        display: flex;
        gap: 5px;
    }
    
    .links-social-media-footer a img{
        cursor: pointer;
        transition: 400ms;
        z-index: 100;
    }
    .links-social-media-footer a img:hover{
        filter: brightness(1.4);
        transform: scale(1.1);
    }

    .bottom-footer{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        padding: 10px;
        width: 100%;

        display: flex;
        justify-content: space-around;

        width: 100%;

        position: absolute;
        bottom: 0;
    }
    
    .container__reserved-rights{
       padding: 10px;
       color: rgba(255, 255, 255, 0.5);
    }

    .container__informations{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 20px;
    }
    .information-div{
        display: flex;
        align-items: center;
        gap: 20px;
    }

    @media (max-width:1023px) {
        .terms-and-privacy{
            display: none;
        }
        .container__informations{
            display: flex;
            align-items: flex-start;
            flex-direction: column;
        }
    }


    @media (max-width:1023px) {
       
        display: flex;
        flex-direction: column;
    }

`;