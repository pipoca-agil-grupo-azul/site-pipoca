import "./styles.css";

export default function DropDown({ submenus, dropDown }) {
  return (
    <ul className={`dropdown ${dropDown ? "show" : ""}`}>
      {submenus.map((submenu) => (
        <li>
          <a href={submenu.url}>{submenu.content}</a>
        </li>
      ))}
    </ul>
  );
}
