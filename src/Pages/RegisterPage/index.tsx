import { useNavigate } from "react-router-dom";
import { RegisterForm } from "../../Components/RegisterForm";
import { StyledRegisterPage } from "./style";

export const RegisterPage = () => {

    const navigate = useNavigate();

    const handleCadastroClick = () => {
      navigate('/login');
    };
    
    return (
        <StyledRegisterPage>
           
           <RegisterForm/>
           <p> Ja possui conta? <span onClick={handleCadastroClick}> Faça login! </span> </p>
        </StyledRegisterPage>
    );
};