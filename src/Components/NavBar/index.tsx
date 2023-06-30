import { Link } from "react-router-dom";
import { StyledNavBar } from "./style";

export const NavBar = ({ onClickFunction }) => {
  return (
    <StyledNavBar>
      <Link to="/" onClick={onClickFunction}>
        Home
      </Link>
      <Link to="/about" onClick={onClickFunction}>
        Sobre
      </Link>
      <Link to="/blog" onClick={onClickFunction}>
        Blog
      </Link>
      <Link to="/projects" onClick={onClickFunction}>
        Projetos
      </Link>
      <Link to="/contato" onClick={onClickFunction}>
        Contato
      </Link>
      <Link to="/login" className="login-btn" onClick={onClickFunction}>
        Conecte-se
      </Link>
    </StyledNavBar>
  );
};
