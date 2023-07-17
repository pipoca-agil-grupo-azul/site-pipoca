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
    /* NO MOMENTO NÃO EXISTEM USERS PREMIUM. REFERENCIAR AQUI O HEADER DOS MESMOS SE VIEREM A EXISTIR*/
    if (user && user.isPremium) {
      return <DynamicHeaderWithAuthenticatedUser />;
    }
    if (user) {
      return <DynamicHeaderWithAuthenticatedUser />;
    }
  };

  return <StyledNavBar>{handleNavLinks()}</StyledNavBar>;
};
