import useAuth from "../../Context/hooks/useAuth";
import iconGoogleColored from "../../assets/icon_google-colored.svg";
import { notifyFailed } from "../../notifications/notifications";
import { StyledLoginWithSocialMedia } from "./style";
import { GoogleLogin } from "@react-oauth/google";
import jwtDecode from "jwt-decode";

export const LoginWithSocialMedia = () => {
  const { handleLoginWithGoogle } = useAuth();

  return (
    <StyledLoginWithSocialMedia>
      <button className="btn-google-login">
        <img src={iconGoogleColored} alt="icon-google" />
        Entre com o Google
      </button>
      <p>----------</p>
      <GoogleLogin
        onSuccess={(response) => handleLoginWithGoogle(response)}
        onError={() =>
          notifyFailed(
            "Um erro inesperado ocorreu ao logar com o Google. Tente novamente mais tarde."
          )
        }
      />
    </StyledLoginWithSocialMedia>
  );
};
