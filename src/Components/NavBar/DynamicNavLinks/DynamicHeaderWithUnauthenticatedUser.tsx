import { Link, useNavigate } from "react-router-dom";
import useHeader from "../../../Context/hooks/useHeader";
import { userUnAuthenticatedLinks } from "./links/userUnAuthenticatedlinks";

export default function DynamicHeaderWithUnauthenticatedUser() {
  const { menuVisibility } = useHeader();
  const navigate = useNavigate();

  return (
    <>
      {userUnAuthenticatedLinks.map((link) => {
        return (
          <Link
            key={link.id}
            to={`${link.url}`}
            onClick={innerWidth < 1024 ? menuVisibility : null}
          >
            {link.content}
          </Link>
        );
      })}
      <Link
        to="/login"
        className="login-btn"
        onClick={() => navigate("/login")}
      >
        Conecte-se
      </Link>
    </>
  );
}
