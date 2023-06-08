import { StyledLoginPage } from "./style";
import { LoginForm } from "../../Components/LoginForm";
import { useNavigate } from 'react-router-dom';

export const LoginPage = () => {
    const navigate = useNavigate();

    const handleCadastroClick = () => {
      navigate('/cadastro');
    };

    return (
        <StyledLoginPage>
            
           <LoginForm />

           <p> Não tem conta? <span onClick={handleCadastroClick}> Se cadastre! </span></p>

        </StyledLoginPage>
    );
};
