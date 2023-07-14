import { useState } from "react";
import DropDown from "../dropDown/DropDown";

export default function MenuItems({ items }) {
  const [dropDown, setDropDown] = useState(false);
  return (
    <li>
      {items.submenu ? (
        <>
          <button
            type="button"
            className="login-btn"
            aria-expanded={dropDown ? "true" : "false"}
            onClick={() => setDropDown(!dropDown)}
          >
            {items.content}
          </button>
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
