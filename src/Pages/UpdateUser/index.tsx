import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import { ButtonSubmit } from "../../Components/ButtonSubmit";
import { StyledLoginForm } from "../../Components/LoginForm/style";
import { IUpdateUserFormData } from "../../Context/types/@types";
import { updateUserSchema } from "./schemaUpdateUser";

export default function UpdateUserPage() {
  const {
    formState: { errors },
  } = useForm<IUpdateUserFormData>({ resolver: yupResolver(updateUserSchema) });

  const [iconPassword, setIconPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  const handleTogglePasswordType = () => {
    if (passwordInputType == "password") {
      setPasswordInputType("text");
      setIconPassword(true);
    }
    setPasswordInputType("password");
    setIconPassword(false);
  };

  return (
    <StyledLoginForm>
      <form>
        <label htmlFor="email">
          Nome <span> {errors.email?.message} </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Nome"
          // {...register("email")}
          value={localStorage.getItem("@AUTH_USER_GOOGLE_NAME")}
        />

        <label htmlFor="email">
          Email <span> {errors.email?.message} </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          // {...register("email")}
          value={localStorage.getItem("@AUTH_USER_GOOGLE_EMAIL")}
        />

        <label htmlFor="password">
          Senha <span> {errors.password?.message} </span>
        </label>
        <div className="input-password">
          <input
            id="password"
            name="password"
            type={passwordInputType}
            placeholder="Digite sua senha"
            // {...register("password")}
          />
          <button onClick={handleTogglePasswordType} type="button">
            {iconPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>

        <ButtonSubmit text={"Entre"} />
      </form>
    </StyledLoginForm>
  );
}
