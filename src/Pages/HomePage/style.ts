import styled from "styled-components";

export const StyledHomePage = styled.div`
    display: flex;
    flex-direction: column;

    justify-content: center;

    margin: 0 auto; 

    font-family: var(--font-family-2);
    
    .greetings-section{
        /* background-image: url('../../../src/assets/gif-pipoca.gif'); */
        background: rgb(126,143,205);
        background: linear-gradient(29deg, rgba(126,143,205,1) 42%, rgba(172,219,223,1) 75%);
        
        background-repeat: repeat;
        background-size: contain; 
        margin-bottom: 25px;
        padding: 0px 0px 20px 0px;
        display: flex;
        min-height: 90vh;
    }

    .next-episode{
        width: 80%;

        display:flex;
        justify-content: center;
        flex-direction: column;
        
        margin: 0 auto;

        align-self: center;
    }

    h1{
        font-size: var(--title-size-big);
        font-family: var(--font-family-2);
        font-weight: 700;
    }
    h2{
        font-size: var(--title-size-small);
        font-family: var(--font-family-2);
    }
    .focused-text-primary-color{
        color: var(--color-primary);
    }

    .newletter-section{
        background: rgb(205,126,132);
        background: linear-gradient(29deg, rgba(205,126,132,1) 42%, rgba(223,172,177,1) 70%);
        margin: 20px 0px;
        position: relative;
        z-index: 2;
    }
/* 
    .pink-details-1{
        position: absolute;
        top: -150px;
        right: 30px;
    }
    .pink-details-2{
        width: 150px;
        height: 150px;
        position: absolute;
        bottom: -65px;
        right: 42%;
        transform: rotate(45deg);
        z-index: 0;
    } */

    @media (max-width:1023px) {
        h1{
            font-size: var(--title-size-medium);
        }
        h2{
            font-size: var(--title-size-small-screens);
        }
        .next-episode{
            width: 100%;
            display: flex;
            margin-left: 6.5%;
        }
        .next-episode iframe{
            align-self: center;
        }
    }

    @media (min-width: 360px) {
        .next-episode{
            margin-left: 8.5%;
        }
    }
    @media (min-width: 381px) {
        .next-episode{
            margin-left: 8.8%;
        }
    }
    @media (min-width: 551px) and (max-width: 1024px) {
        .next-episode {
        margin-left: 4.5%;
    }
    }
    

`