import { SetStateAction, createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import { baseURL } from "../Services/api";
import {
  IChildrenProps,
  ILoginFormData,
  IRegisterFormData,
  IUpdateUserFormData,
  IUser,
} from "./@types";

interface IUserContext {
  user?: IUser;
  handleSubmitLogin: (formData: ILoginFormData) => Promise<void>;
  handleSubmitRegister: (formData: IRegisterFormData) => Promise<void>;
  handleUpdateUser: (formData: IUpdateUserFormData) => Promise<void>;
  handleLogout: () => void;
}

export const UserContext = createContext({} as IUserContext);

export const UserProvider = ({ children }: IChildrenProps) => {
  const [user, setUser] = useState<IUser>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loadingFromStorage = () => {
      const storageUser = localStorage.getItem("@AUTH:USER");
      const storageToken = localStorage.getItem("@USERTOKEN");

      if (storageToken && storageUser) {
        setUser(
          JSON.stringify(storageUser) as unknown as SetStateAction<IUser>
        );
        navigate("/");
      }
    };
    loadingFromStorage();
  }, []);

  const handleSubmitLogin = async (formData: ILoginFormData) => {
    try {
      const response = await baseURL.post("/login", formData);
      localStorage.setItem("@USERTOKEN", response.data.token);
      localStorage.setItem(
        "@AUTH:USER",
        `${response.data.id} - ${response.data.email}`
      );
      setUser(response.data);
      navigate(`/`);
    } catch (error) {
      //
    }
  };

  const handleSubmitRegister = async (formData: IRegisterFormData) => {
    const toastRegister = toast.loading("Efetuando cadastro");
    console.log(formData);
    try {
      const response = await baseURL.post("/user", formData);
      console.log(response);
      toast.update(toastRegister, {
        render: "Cadastro realizado com sucesso",
        type: "success",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
      navigate(`/login`);
    } catch (error) {
      toast.update(toastRegister, {
        render: "Erro ao efetuar o cadastro reveja suas informações",
        type: "error",
        isLoading: false,
        autoClose: 3000,
        closeOnClick: true,
      });
    }
  };

  const handleUpdateUser = async (formData: IUpdateUserFormData) => {
    console.log(formData);
  };

  const handleLogout = () => {
    localStorage.clear();
    setUser(null);
    navigate("/");
  };

  return (
    <UserContext.Provider
      value={{
        user,
        handleSubmitLogin,
        handleSubmitRegister,
        handleUpdateUser,
        handleLogout,
      }}
    >
      {children}
    </UserContext.Provider>
  );
};
