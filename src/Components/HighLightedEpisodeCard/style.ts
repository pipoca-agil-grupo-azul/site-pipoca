import styled from "styled-components";

export const StyledContainerNextEpisode = styled.li`
    display: flex;
    
    gap: 20px;
    padding-bottom: 40px;

    h2{
        font-size: var(--title-size-small);
        font-weight: 700;
        align-self: flex-start;
        text-align: start;
    }

    .container_youtube-embed{
        width: 50%;
    } 
    .container_youtube-embed iframe{
        border-radius: 30px;
    }
    .container__content-highlighted-ep{
        display: flex;
        flex-direction: column;
        align-items: start;
        gap: 5px;
        justify-content: start;
        max-width: 45%;
        margin: 5px;
    }

    @media (max-width:1023px) {
        display: flex;
        flex-direction: column;
        padding: 0px;
        background-color: transparent;
        margin: 0 auto;

        .container__content-highlighted-ep{
            display: none;
        }
        h2{
            font-size: var(--font-size-big);
        }

       .container_youtube-embed{
            width: 100vw;

            display: flex;
        } 
    }
    @media (min-width: 1023px){
        .container_youtube-embed iframe {
        margin-left: -35px;
        }
    } 
     
`;