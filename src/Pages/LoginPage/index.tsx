import { StyledLoginPage } from "./style";
import { LoginForm } from "../../Components/LoginForm";
import { useNavigate } from "react-router-dom";

export const LoginPage = () => {
  const navigate = useNavigate();

  const handleCadastroClick = () => {
    navigate("/cadastro");
  };

  return (
    <StyledLoginPage>
      <LoginForm />
      <p>
        Novo no Pipoca Ágil?
        <span onClick={handleCadastroClick}> Cadastre-se! </span>
      </p>
    </StyledLoginPage>
  );
};
