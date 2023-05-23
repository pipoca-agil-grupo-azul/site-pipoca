import { Link } from "react-router-dom";
import { StyledNavBar } from "./style";

export const NavBar = () => {
 
    return (
        <StyledNavBar>
            <Link to="/"> Home </Link>
            <Link to="/"> Sobre </Link>
            <Link to="/"> Blog </Link>
            <Link to="/"> Projetos </Link>
            <Link to="/contato"> Contato </Link>
           
            <button className="login-btn"> LOGIN </button>
             
        </StyledNavBar>
    );
};