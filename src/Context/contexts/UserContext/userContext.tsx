import { CredentialResponse } from "@react-oauth/google";
import jwtDecode from "jwt-decode";
import { SetStateAction, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { baseURL } from "../../../Services/api";
import {
  notifyFailed,
  notifyLoading,
  notifySuccess,
} from "../../../notifications/notifications";
import { IUserContext } from "../../interfaces/IUserContext";
import { InfoGoogleLoginDetails } from "../../interfaces/LoginGoogleTokenDetails";
import {
  IChildrenProps,
  ILoginFormData,
  IRegisterFormData,
  IUser,
} from "../../types/@types";
import useHeader from "../../hooks/useHeader";

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState<IUser>(null);

  const navigate = useNavigate();

  const { menuVisibility } = useHeader();

  useEffect(() => {
    const loadingFromStorage = () => {
      const storageUser = localStorage.getItem("@AUTH:USER");
      const storageToken = localStorage.getItem("@USERTOKEN");
      const authUserName = localStorage.getItem("@AUTH_USER_GOOGLE_NAME");
      const authUserEmail = localStorage.getItem("@AUTH_USER_GOOGLE_EMAIL");

      if (storageToken && storageUser) {
        setUser(
          JSON.stringify(storageUser) as unknown as SetStateAction<IUser>
        );
      }

      if (authUserEmail && authUserName) {
        const details = { authUserEmail, authUserName };
        setUser(JSON.stringify(details) as unknown as SetStateAction<IUser>);
      }
    };
    loadingFromStorage();
  }, []);

  const handleSubmitLogin = async (formData: ILoginFormData) => {
    try {
      const response = await baseURL.post("/login", formData);
      notifySuccess("Login realizado com sucesso!");
      localStorage.setItem("@USERTOKEN", response.data.token);
      localStorage.setItem(
        "@AUTH:USER",
        `${response.data.id} - ${response.data.email}`
      );
      setUser(response.data);
      navigate(`/`);
    } catch (error) {
      notifyFailed(
        "Ocorreu um erro ao validar suas credenciais! Tente novamente."
      );
    }
  };

  const handleSubmitRegister = async (formData: IRegisterFormData) => {
    notifyLoading("Registrando cadastro no servidor...");
    try {
      await baseURL.post("/user", formData);
      notifySuccess("Cadastro realizado com sucesso!");
      navigate(`/login`);
    } catch (error) {
      notifyFailed("Ocorreu um erro ao realizar o cadastro! Tente novamente.");
    }
  };

  const handleLoginWithGoogle = async (response: CredentialResponse) => {
    try {
      const details: InfoGoogleLoginDetails = jwtDecode(response.credential);
      setUser(
        JSON.stringify(details.email) as unknown as SetStateAction<IUser>);
      localStorage.setItem("@AUTH_USER_GOOGLE_NAME", `${details.name}`);
      localStorage.setItem("@AUTH_USER_GOOGLE_EMAIL", `${details.email}`);
      notifySuccess("Login realizado com sucesso!");
      navigate("/");
    } catch (error) {
      notifyFailed(
        "Ocorreu um erro ao entrar com o Google. Tente novamente mais tarde."
      );
    }
  };

  const handleLogout = () => {
    localStorage.clear();
    notifySuccess("Logout realizado com sucesso!");
    setUser(null);
    menuVisibility()
    navigate("/");
  };

  const handleUpdateCredentials = async () => {
    return;
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleSubmitLogin,
        handleSubmitRegister,
        handleLoginWithGoogle,
        handleLogout,
        handleUpdateCredentials,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
