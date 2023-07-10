import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import avatar_icone from "../../../assets/avatar_icone.png";

interface AuthHeaderProps {
  onClickFunction: any;
  styles?: React.CSSProperties;
}

export default function DynamicHeaderWithAuthenticatedUser({
  onClickFunction,
  styles,
}: AuthHeaderProps) {
  return (
    <>
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
      <Avatar
        alt="Ícone de avatar"
        src={avatar_icone}
        style={{ width: 30, height: 30 }}
      />
    </>
  );
}
