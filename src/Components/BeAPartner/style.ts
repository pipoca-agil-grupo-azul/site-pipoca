import styled from "styled-components";

export const StyledBeAPartner = styled.div`

    width: 100%;
    min-height: 600px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: var(--color-grey-0);

    position: relative;
    padding: 100px 100px 200px 100px;
    
    .container__be-a-partner{
        background-color: var(--color-primary);
        
        margin: 0 auto;

        display: flex;
        align-items: center;
        justify-content: space-around;

        padding: 100px;

        border-radius: 40px;

        position: relative;
        
    }
    .petals-img-right{
        position: absolute;
        bottom: 20px;
        right: 0;
    }
    .petals-img{
        position: absolute;
        top: -80px;
        left: -130px;
    }
    .ibson-img{
        z-index: 1;
        position: absolute;
        bottom: 0;
        right: 0;
        height: 80%;
        max-height: 80%;
    }
    
    .partner-btn{
        cursor: pointer;
        padding: 15px;
       
        border: 1px solid transparent;
        outline: none;
        box-shadow: 5px 5px 10px rgba(255, 255, 255, 0.2);
        transition: 500ms;

        border-radius: 50px;
        color: var(--color-primary);
        background-color: var(--color-grey-0);
    }

    .partner-btn:hover{
        color: var(--color-primary);            
        background-color: #FFCC33;
        box-shadow: 5px 5px 10px  rgb(255, 204, 51,0.5);
        transform: scale(1.1);
    }

    @media (max-width:767px) {

        .ibson-img{
            display: none;
        }    

        .container__be-a-partner{
            border-radius: 0px;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            gap: 20px;
            max-width: 99vw;
        }

        .text-be-a-partner{
            min-width: 320px;
            text-align:justify;
        }

        .partner-btn{
            width: 200px;
            text-align: center;
            z-index: 22;
        }
        
    }
    @media (max-width:1023px) {
        .container__be-a-partner{
            flex-direction: column;
            gap: 20px;
        }
        .ibson-img{
            display: none;
        }  
    }
    @media (min-width: 1023px) and (max-width: 1499px) {
        .container__be-a-partner{
            
        }
        .partner-btn{
            width: 200px;
            text-align: center;
            z-index: 22;
        }
        .ibson-img{
            
            right: -150px;
            height: 70%;
        }
    }

    @media (min-width: 1500px) and (max-width: 1900px) {
        .ibson-img{
            right: -20px;
            height: 75%;
        }
    }
`;

