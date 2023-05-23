import { StyledInformationPreHeader } from "./style";
import iconPhone from "../../assets/icon _phone.svg";
import iconMail from "../../assets/icon _mail.svg";

export const InformationPreHeader = () => {
  return (
    <StyledInformationPreHeader>
      <div>
        <img src={iconPhone} alt="" />
        <p> +55 21 91234-5678 </p>
      </div>

      <div>
        <img src={iconMail} alt="" />
        <p> contato@email.com </p>
      </div>
    </StyledInformationPreHeader>
  );
};
