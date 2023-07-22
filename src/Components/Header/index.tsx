import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import useHeader from "../../Context/hooks/useHeader";
import "../../Styles/index.css";
import logoImg from "../../assets/pipoca-logo.svg";
import { NavBar } from "../NavBar";
import { StyledHeader } from "./style";
import useAuth from "../../Context/hooks/useAuth";

interface HeaderProps {
  style?: React.CSSProperties;
}

export const Header = ({ style }: HeaderProps) => {
  const { menuVisibility, navBarVisibility } = useHeader();
  const navigate = useNavigate();

  const goToHome = () => {
    navigate("/");
  };

  const { user } = useAuth();

  console.log(user)
  
  return (
    <StyledHeader style={style}>
      <img
        src={logoImg}
        alt=""
        onClick={() => {
          goToHome();
        }}
      />
      

      <div className={navBarVisibility}>
        <NavBar />
      </div>

      <div className="hamburger" onClick={() => menuVisibility()}>
        <FaBars size={35} color={"black"} />
      </div>
    </StyledHeader>
  );
};
