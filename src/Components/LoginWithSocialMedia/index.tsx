import iconGoogleColored from "../../assets/icon_google-colored.svg";
import { StyledLoginWithSocialMedia } from "./style";

export const LoginWithSocialMedia = () => {
  return (
    <StyledLoginWithSocialMedia>
      <button className="btn-google-login">
        <img src={iconGoogleColored} alt="icon-google" />
        Entre com o Google
      </button>
    </StyledLoginWithSocialMedia>
  );
};
