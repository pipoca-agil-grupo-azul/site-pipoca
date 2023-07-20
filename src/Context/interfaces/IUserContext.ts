import { ILoginFormData, IRegisterFormData, IUser } from "../types/@types";

export interface IUserContext {
  user?: IUser;
  handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
  handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
  handleLoginWithGoogle: (response) => Promise<void>;
  handleLogout: () => void;
}
