import useAuth from "../../../Context/hooks/useAuth";
import MenuItems from "./Menu_Items/MenuItems";
import { userAuthenticatedLinks } from "./links/userAuthenticatedLinks";

export default function DynamicHeaderWithAuthenticatedUser() {
  const { handleLogout } = useAuth();

  return (
    <>
      {userAuthenticatedLinks.map((link) => {
        return <MenuItems items={link} />;
      })}
    </>
  );
}
