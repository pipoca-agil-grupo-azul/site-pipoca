import styled from "styled-components";

export const StyledNewsletterSubscribe = styled.footer`

    display: flex;
    align-items: center;
    justify-content: center;
    gap: 30px;
    width: 80vw;
  
    padding: 120px;
   
    margin: 0px auto;
    font-family: 'Poppins', sans-serif;

    h2{
        font-size: 64px;
        font-weight: 700;
    }
    form{
        display: flex;
        flex-direction: column;
        gap: 20px;
        width: 30%;
    }
    form button{
        color: var(--color-grey-100);
        text-decoration: none;
        background-color: var(--color-primary);
        font-size: var(--font-size-regular);
        padding: 0.3rem 1.5rem;
        border-radius: var(--border-radius-default);
        border: 1px solid transparent;
        transition: 600ms;
        box-shadow: 5px 5px 10px var(--color-primary);
    }
    form input{
        padding: 5px;
        border-radius: 4px;
        border: 1px solid transparent;
        outline: none;
        box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.5);
    }
    form button:hover{
        color: var(--color-primary);            
        background-color: #FFCC33;
        box-shadow: 5px 5px 10px  rgb(255, 204, 51,0.5);
    }

    @media (max-width:1023px) {
        display: grid;
        flex-direction: column;
        padding: 50px 10px;
        h2{
            font-size: var(--title-size-small-screens);
        }
        form{
            width: 100%;
        }
    }


`;

