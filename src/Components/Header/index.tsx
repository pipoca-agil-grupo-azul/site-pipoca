import "../../Styles/index.css";
import { StyledHeader } from "./style";
import logoImg from "../../assets/pipoca-logo.svg";
import { useNavigate } from "react-router-dom";
import { FaBars } from "react-icons/fa";
import { useState } from "react";
import { NavBar } from "../NavBar";

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
        <NavBar onClickFunction={() => menuVisibility()} />
      </div>

      <div className="hamburger" onClick={() => menuVisibility()}>
        <FaBars size={35} color={"black"} />
      </div>
    </StyledHeader>
  );
};
