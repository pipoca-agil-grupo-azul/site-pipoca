import { useNavigate } from "react-router-dom";
import { LoginForm } from "../../Components/LoginForm";
import { StyledLoginPage } from "./style";

export const LoginPage = () => {
  const navigate = useNavigate();

  return (
    <StyledLoginPage>
      <LoginForm />
      <p>
        Esqueceu sua senha?
        <span onClick={() => navigate("/recover")}> Recuperar senha. </span>
      </p>
      <div className="divider">
        <p className="line"></p>
        <p className="text"></p>
        <p className="line"></p>
      </div>
      <p>
        Novo no Pipoca Ágil?
        <span onClick={() => navigate("/cadastro")}> Cadastre-se! </span>
      </p>
    </StyledLoginPage>
  );
};
