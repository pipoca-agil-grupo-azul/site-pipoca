import { StyledWhatsButton } from "./style";
import whatsImg from "../../assets/Icon_WhatsApp.svg"
import payMeACoffeImg from "../../assets/pay-me-a-coffe-img.svg"

export const FixedIcons = () => {
  return (
    <StyledWhatsButton>

     <div>
        <a href="https://api.whatsapp.com/send?phone=5521984438142&text=Ol%C3%A1%2C%20como%20voc%C3%AA%20est%C3%A1%3F" target="blank">
          <img src={whatsImg} alt="" className="whatsapp-btn"/> 
        </a>
     </div>

      <div className="container__pay-me-a-coffe-btn">
        <a href="https://mepagaumcafe.com.br/pipocaagil/" target="blank" className="paymeacoffe-btn">
          <p className="text-pay-me-a-coffe"> <strong> Me Paga um Café </strong> </p>
          <img src={payMeACoffeImg} alt="" className="paymeacoffe-img"/> 
        </a>
      </div>
    </StyledWhatsButton>
  );
};
