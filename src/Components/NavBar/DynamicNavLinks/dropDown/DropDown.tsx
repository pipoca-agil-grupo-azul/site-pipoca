import useAuth from "../../../../Context/hooks/useAuth";
import "./styles.css";

export default function DropDown({ submenus, dropDown }) {
  const { handleLogout } = useAuth();

  return (
    <ul className={`dropdown ${dropDown ? "show" : ""}`}>
      {submenus.map((submenu) => (
        <li>
          <a
            href={submenu.url}
            onClick={submenu.content === "Sair" ? handleLogout : null}
          >
            {submenu.content}
          </a>
        </li>
      ))}
    </ul>
  );
}
