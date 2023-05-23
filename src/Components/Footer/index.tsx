import { StyledFooter } from "./style";
import iconPhonePhoneBlack from "../../assets/icon _phone_black.svg";
import iconMailBlack from "../../assets/icon _mail_black.svg";
import iconLinkedin from "../../assets/icon_linkedin.svg";
import iconInstagram from "../../assets/icon _instagram.svg";
import iconYoutube from "../../assets/icon_youtube.svg";
import iconFacebook from "../../assets/icon_facebook.svg";
import logoImg from "../../assets/pipoca-logo.svg";

export const Footer = () => {
  return (
    <StyledFooter>
      <section className="information">
      <img src={logoImg} alt="" className="logo-img"/>

        {/* <div className="information-div">
          <img src={iconPinBlack} alt="" />
          <p> Rua tal tal tal, Bairro Cidade, Estado - BR </p>
        </div> */}

        <div className="information-div">
          <img src={iconPhonePhoneBlack} alt="" />
          <p> (21) 91234-5678 </p>
        </div>

        <div className="information-div">
          <img src={iconMailBlack} alt="" />
          <p> contato@email.com </p>
        </div>
      </section>

      <section className="links"></section>

      <section className="newsletter">
        <h3>
          {" "}
          <strong> Assine nossa Newsletter! </strong>
        </h3>
        <form action="">
          <input type="text" placeholder="Email" />
          <button type="submit" className="submit-button-newsletter-footer">  → </button>
        </form>
        <h3>
          {" "}
          <strong> Siga a gente! </strong>
        </h3>

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
          <p> © Pipoca Ágil – Todos os direitos reservados </p>
        </div>
        
        <div className="terms-and-privacy">
          <a href="">  Termos e Condições  </a>

          <a href=" "> Política de Privacidade </a>
        </div>
    

      </section>
    </StyledFooter>
  );
};
