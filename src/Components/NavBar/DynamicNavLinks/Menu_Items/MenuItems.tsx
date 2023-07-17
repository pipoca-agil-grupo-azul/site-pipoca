import { Avatar } from "@mui/material";
import avatar_icone from "../../../../assets/avatar_icone.png";
import { useNavigate } from "react-router-dom";

export default function MenuItems({ items }) {

  const navigate = useNavigate();

  const handleUpdateClick = () => {
    navigate("/update");
    window.location.reload();
  };

  return (
    <li>
      {items.submenu ? (
        <>
          <div className="avatar">
            <Avatar
              onClick={handleUpdateClick}
              alt="Ícone de avatar"
              src={avatar_icone}
              style={{ width: 30, height: 30 }}
            />
          </div>
        </>
      ) : (
        <>
          <a href={items.url}>{items.content}</a>
        </>
      )}
    </li>
  );
}
