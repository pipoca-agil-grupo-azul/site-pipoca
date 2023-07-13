import { Link, useNavigate } from "react-router-dom";
import { userUnAuthenticatedLinks } from "./links/userUnAuthenticatedlinks";

export default function DynamicHeaderWithUnauthenticatedUser() {
  const navigate = useNavigate();

  return (
    <>
      {userUnAuthenticatedLinks.map((link) => {
        return (
          <Link key={link.id} to={`${link.url}`}>
            {link.title}
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
