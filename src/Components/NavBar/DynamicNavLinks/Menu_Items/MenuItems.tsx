import { useState } from "react";
import DropDown from "../dropDown/DropDown";
import { Avatar } from "@mui/material";
import avatar_icone from "../../../../assets/avatar_icone.png";

export default function MenuItems({ items }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <li>
      {items.submenu ? (
        <>
          <Avatar
            alt="Ícone de avatar"
            src={avatar_icone}
            style={{ width: 30, height: 30 }}
            onClick={() => setDropDown(!dropDown)}
            aria-expanded={dropDown ? "true" : "false"}
          />
          <DropDown submenus={items.submenu} dropDown={dropDown} />
        </>
      ) : (
        <>
          <a href={items.url}>{items.content}</a>
        </>
      )}
    </li>
  );
}
