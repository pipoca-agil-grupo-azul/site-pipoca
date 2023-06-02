import { StyledFooter } from "./style";
import iconPhonePhoneBlack from "../../assets/icon _phone.svg";
import iconMailBlack from "../../assets/icon _mail.svg";
import iconLinkedin from "../../assets/icon_lkd-white.svg";
import iconInstagram from "../../assets/icon_in-white.svg";
import iconYoutube from "../../assets/icon_yt-white.svg";
import iconFacebook from "../../assets/icon_face-white.svg";
import logoImg from "../../assets/pipoca-logo.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <section className="container__newsletter">

       <div className="container__logo">
        <img src={logoImg} alt="" className="logo-img"/>
        <p> Pipoca Ágil</p>
       </div>

        <h2> Receba nossa newsletter </h2>

        <form action="">
          <input type="text" placeholder="Email" />
          <button type="submit" className="submit-button-newsletter-footer">  CADASTRAR </button>
        </form>

      </section>

      <section className="container__follow-us">
        
        <div className="container__informations">
          <div className="information-div">
            <img src={iconPhonePhoneBlack} alt="" />
            <p> (21) 91234-5678 </p>
          </div>

          <div className="information-div">
            <img src={iconMailBlack} alt="" />
            <p> contato@email.com </p>
          </div>
        </div>

        <h2> Siga a gente</h2>
        <div className="links-social-media-footer">

          <a href="https://www.linkedin.com/in/ibson-cabral/" target="_blank">
            <img src={iconLinkedin} alt="" />
          </a>
          <a href="https://www.facebook.com/pipocaagil" target="_blank">
            <img src={iconFacebook} alt="" />
          </a>
          <a href="https://www.instagram.com/pipocaagil/" target="_blank">
            <img src={iconInstagram} alt="" />
          </a>
          <a href="https://www.youtube.com/@PipocaAgil" target="_blank">
            <img src={iconYoutube} alt="" />
          </a>

        </div>
      </section>

      <section className="bottom-footer">
      
        <div className="copyright">
          <p> Política de Privacidade & Cookies </p>
        </div>
        
        <div className="container__reserved-rights">
          <p> © 2023 Pipoca Ágil - Todos os direitos reservados. </p>
        </div>
    

      </section>
    </StyledFooter>
  );
};
