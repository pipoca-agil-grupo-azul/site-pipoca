import { useContext } from "react";
import { UserContext } from "../contexts/UserContext/userContext";

export default function useAuth() {
  return useContext(UserContext);
}
