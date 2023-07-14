import { Avatar } from "@mui/material";
import { Link } from "react-router-dom";
import useAuth from "../../../Context/hooks/useAuth";
import avatar_icone from "../../../assets/avatar_icone.png";
import { userAuthenticatedLinks } from "./links/userAuthenticatedLinks";
import MenuItems from "./Menu_Items/MenuItems";

export default function DynamicHeaderWithAuthenticatedUser() {
  const { handleLogout } = useAuth();

  return (
    <>
      {userAuthenticatedLinks.map((link) => {
        return <MenuItems items={link} />;
      })}
      {/* <Avatar
        alt="Ícone de avatar"
        src={avatar_icone}
        style={{ width: 30, height: 30 }}
      /> */}
    </>
  );
}
