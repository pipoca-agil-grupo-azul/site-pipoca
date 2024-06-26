import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { SubmitHandler, useForm } from "react-hook-form";
import { FiEye, FiEyeOff } from "react-icons/fi";
import useAuth from "../../Context/hooks/useAuth";
import { ILoginFormData } from "../../Context/types/@types";
import { ButtonSubmit } from "../ButtonSubmit";
import { LoginWithSocialMedia } from "../LoginWithSocialMedia";
import { schemaLoginForm } from "./schema";
import { StyledLoginForm } from "./style";

export const LoginForm = () => {
  const { handleSubmitLogin } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginFormData>({ resolver: yupResolver(schemaLoginForm) });

  const submitLogin: SubmitHandler<ILoginFormData> = (formData) => {
    handleSubmitLogin(formData);
  };

  const [iconPassword, setIconPassword] = useState(false);
  const [passwordInputType, setPasswordInputType] = useState("password");

  const handleTogglePasswordType = () => {
    if (passwordInputType == "password") {
      setPasswordInputType("text");
      setIconPassword(true);
    } else {
      setPasswordInputType("password");
      setIconPassword(false);
    }
  };

  return (
    <StyledLoginForm>
      <h1> Entre e divirta-se! </h1>
      <form action="" onSubmit={handleSubmit(submitLogin)}>
        <label htmlFor="email">
          Email <span> {errors.email?.message} </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          {...register("email")}
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
            {...register("password")}
          />
          <button onClick={handleTogglePasswordType} type="button">
            {iconPassword ? <FiEye /> : <FiEyeOff />}
          </button>
        </div>

        <ButtonSubmit text={"Entre"} />
      </form>
      <div className="divider">
        <p className="line"></p>
        <p className="text"></p>
        <p className="line"></p>
      </div>
      <LoginWithSocialMedia />
    </StyledLoginForm>
  );
};
