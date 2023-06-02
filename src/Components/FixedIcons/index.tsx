import { StyledWhatsButton } from "./style";
import whatsImg from "../../assets/Icon_WhatsApp.svg"
import payMeACoffeImg from "../../assets/pay-me-a-coffe-img.svg"

export const FixedIcons = () => {
  return (
    <StyledWhatsButton>

     <div>
        <a href="https://api.whatsapp.com/send?phone=5521971439655&text=Ol%C3%A1%21%20Gostaria%20de%20saber%20mais%20sobre%20o%20Pipoca%20%C3%81gil%21" target="blank">
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
