import { StyledLoginWithSocialMedia } from "./style";
import iconGoogleColored from "../../assets/icon_google-colored.svg"
import iconLkdWhite from "../../assets/icon_lkd-white.svg"


export const LoginWithSocialMedia = () => {
  return (
    <StyledLoginWithSocialMedia>
    <button className="btn-google-login">
        <img src={iconGoogleColored} alt="icon-google" />
        Entre com o Google
    </button>
    <button className="btn-linkedin-login" >
        <img src={iconLkdWhite} alt="icon-google" />
        Entre com o Linkedin
    </button>   
    </StyledLoginWithSocialMedia>
  );
};
