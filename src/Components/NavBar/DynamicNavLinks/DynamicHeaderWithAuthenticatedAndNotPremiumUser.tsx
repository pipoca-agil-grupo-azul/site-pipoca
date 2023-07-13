import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import avatar_icone from "../../../assets/avatar_icone.png";
import { userAuthenticatedLinks } from "./links/userAuthenticatedLinks";
import useAuth from "../../../Context/hooks/useAuth";

export default function DynamicHeaderWithAuthenticatedUser() {
  const { handleLogout } = useAuth();

  return (
    <>
      {userAuthenticatedLinks.map((link) => {
        return (
          <Link
            key={link.id}
            to={`${link.url}`}
            onClick={link.title === "Sair" ? handleLogout : null}
          >
            {link.title}
          </Link>
        );
      })}
      <Avatar
        alt="Ícone de avatar"
        src={avatar_icone}
        style={{ width: 30, height: 30 }}
      />
    </>
  );
}
