import styled from "styled-components";

export const StyledWhatsButton = styled.div`

    display: flex;
    flex-direction: column;
    position: fixed;
    bottom: 15px;
    right: 15px;
    z-index: 2;
    align-items: end;

    .paymeacoffe-btn{
        display: flex;
        align-items: center;
        transition: transform 0.3s ease;
        cursor: pointer;
    }
    .container__pay-me-a-coffe-btn{
        transition: transform 0.3s ease;  
    }
    .container__pay-me-a-coffe-btn:hover{
        transform: scale(1.1);
    }
    .paymeacoffe-img{
        z-index: 2;
    }
    .text-pay-me-a-coffe{
        font-family: 'Fredoka', sans-serif;
        text-decoration: none;
        font-size: var(--font-size-regular);
        padding: 5px 30px;

        border-radius: var(--border-radius-default);
        
        font-weight: 600;
        color: var(--color-grey-900);     
        border: 1px solid var(--color-primary);
        background-color: #FFCC33;
        box-shadow: var(--color-primary) 5px 5px 15px;


        position: relative;
        bottom: -25px;
        right: -45px;
        z-index: 0; 
    }
    .whatsapp-btn{
        border:  none;
        background-color: transparent;
        transition: transform 0.3s ease;
    }
    .whatsapp-btn:hover{
        transform: scale(1.2);
    }

    button{
        border:  none;
        background-color: transparent;
    }

`;


