import { Navigate } from "react-router-dom";
import useAuth from "../Context/hooks/useAuth";

export default function PrivateRoute({ children }) {
//  const { user } = useAuth();

  const user = true;

  return user ? children : <Navigate to="/login" />;
}
