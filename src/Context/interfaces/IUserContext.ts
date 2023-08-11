import { CredentialResponse } from "@react-oauth/google";
import { ILoginFormData, IRegisterFormData, IUser } from "../types/@types";

export interface IUserContext {
  user?: IUser;
  handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
  handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
  handleLoginWithGoogle: (response: CredentialResponse) => Promise<void>;
  handleUpdateCredentials: () => Promise<void>;
  handleLogout: () => void;
}
