import useAuth from "../../Context/hooks/useAuth";
import DynamicHeaderWithAuthenticatedUser from "./DynamicNavLinks/DynamicHeaderWithAuthenticatedAndNotPremiumUser";
import DynamicHeaderWithUnauthenticatedUser from "./DynamicNavLinks/DynamicHeaderWithUnauthenticatedUser";
import { StyledNavBar } from "./style";

export const NavBar = () => {
  const { user } = useAuth();

  const handleNavLinks = () => {
    if (!user) {
      return <DynamicHeaderWithUnauthenticatedUser />;
    }
    if (user && user.isPremium) {
      return <DynamicHeaderWithAuthenticatedUser />;
    }
    if (user) {
      return <DynamicHeaderWithAuthenticatedUser />;
    }
  };

  return <StyledNavBar>{handleNavLinks()}</StyledNavBar>;
};
