import { GoogleOAuthProvider } from "@react-oauth/google";
import { IChildrenProps } from "../../types/@types";

export default function GoogleProvider({ children }: IChildrenProps) {
  return (
    <GoogleOAuthProvider clientId="765147924254-jqv67va2oiq8uqp075n92anqgm4r8a8m.apps.googleusercontent.com">
      {children}
    </GoogleOAuthProvider>
  );
}
