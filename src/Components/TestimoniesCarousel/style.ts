import styled from "styled-components";

export const StyledTestimoniesList = styled.footer`

    width: 80vw;

    margin: 0 auto;
    font-family: var(--font-family-2);
    font-family: 'Poppins', sans-serif;

    .title__section-testimonies{
        
    }
    .subtitle-testimonies{
        font-size: 30px;
        font-weight: 300;
        margin-bottom: 55px;
    }
    h3{
        font-size: 19.5px;
        letter-spacing: 5px;
    }
    .swiper-pagination-bullet {
        background-color: var(--color-primary);
        opacity: 0.5;
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
    }
    .swiper-pagination-bullet-active {
        background-color: var(--color-primary);
        box-shadow: 1px 1px 2px rgba(0, 0, 0, 1);
        opacity: 1;
    }

    @media(max-width:1023px) {
     width:80vw ;
    }
`;