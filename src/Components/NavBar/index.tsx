import useAuth from "../../Context/hooks/useAuth";
import DynamicHeaderWithAuthenticatedUser from "./DynamicNavLinks/DynamicHeaderWithAuthenticated";
import DynamicHeaderWithUnauthenticatedUser from "./DynamicNavLinks/DynamicHeaderWithUnauthenticatedUser";
import { StyledNavBar } from "./style";

export const NavBar = () => {
  const { user } = useAuth();

  const handleNavLinks = () => {
    if (!user) {
      return <DynamicHeaderWithUnauthenticatedUser />;
    }
    if (user) {
      return <DynamicHeaderWithAuthenticatedUser />;
    }
  };

  return <StyledNavBar>{handleNavLinks()}</StyledNavBar>;
};
