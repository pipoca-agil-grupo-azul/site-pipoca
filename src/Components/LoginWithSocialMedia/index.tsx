import { baseURL } from "../../Services/api";
import iconGoogleColored from "../../assets/icon_google-colored.svg";
import iconLkdWhite from "../../assets/icon_lkd-white.svg";
import { StyledLoginWithSocialMedia } from "./style";

export const LoginWithSocialMedia = () => {
  const to = async (promise: any) => {
    return promise.then((result) => [null, result]).catch((error) => [error]);
  };

  const handleGoogleLogin = async () => {
    const request = await baseURL.get("/loginGoogle/private", {
      headers: {
        
      }
    });

    const response = await to(request);

    console.log(response);

    return;
  };

  return (
    <StyledLoginWithSocialMedia>
      <button className="btn-google-login" onClick={handleGoogleLogin}>
        <img src={iconGoogleColored} alt="icon-google" />
        Entre com o Google
      </button>
      <button className="btn-linkedin-login">
        <img src={iconLkdWhite} alt="icon-google" />
        Entre com o Linkedin
      </button>
    </StyledLoginWithSocialMedia>
  );
};
