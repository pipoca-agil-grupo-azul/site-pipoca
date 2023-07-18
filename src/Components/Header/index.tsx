import { useState } from "react";
import { FaBars } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../../Styles/index.css";
import logoImg from "../../assets/pipoca-logo.svg";
import { NavBar } from "../NavBar";
import { StyledHeader } from "./style";

interface HeaderProps {
  style?: React.CSSProperties;
}

export const Header = ({ style }: HeaderProps) => {
  const navigate = useNavigate();

  const [navBarVisibility, setNavBarVisibility] = useState("hidden");

  const goToHome = () => {
    navigate("/");
  };

  const menuVisibility = () => {
    navBarVisibility == "hidden"
      ? setNavBarVisibility("visible")
      : setNavBarVisibility("hidden");
  };

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
