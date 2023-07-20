import { GoogleLogin } from "@react-oauth/google";
import useAuth from "../../Context/hooks/useAuth";
import { notifyFailed } from "../../notifications/notifications";
import { StyledLoginWithSocialMedia } from "./style";

export const LoginWithSocialMedia = () => {
  const { handleLoginWithGoogle } = useAuth();

  return (
    <StyledLoginWithSocialMedia>
      <GoogleLogin
        onSuccess={(response) => handleLoginWithGoogle(response)}
        onError={() =>
          notifyFailed(
            "Um erro inesperado ocorreu ao logar com o Google. Tente novamente mais tarde."
          )
        }
        locale="pt-br"
        shape="pill"
        size="large"
        width="1000"
      />
    </StyledLoginWithSocialMedia>
  );
};
