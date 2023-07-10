import useAuth from "../../Context/hooks/useAuth";
import DynamicHeaderWithAuthenticatedUser from "./DynamicNavLinks/DynamicHeaderWithAuthenticatedAndNotPremiumUser";
import DynamicHeaderWithUnauthenticatedUser from "./DynamicNavLinks/DynamicHeaderWithUnauthenticatedUser";
import { StyledNavBar } from "./style";

export const NavBar = ({ onClickFunction }) => {
  const { user } = useAuth();

  const handleNavLinks = () => {
    if (!user) {
      return (
        <DynamicHeaderWithUnauthenticatedUser
          onClickFunction={onClickFunction}
        />
      );
    }
    if (user && user.isPremium) {
      return (
        <DynamicHeaderWithAuthenticatedUser onClickFunction={onClickFunction} />
      );
    }
    if (user) {
      return (
        <DynamicHeaderWithAuthenticatedUser onClickFunction={onClickFunction} />
      );
    }
  };

  return <StyledNavBar>{handleNavLinks()}</StyledNavBar>;
};
