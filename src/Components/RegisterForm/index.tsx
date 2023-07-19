import { yupResolver } from "@hookform/resolvers/yup";
import { SubmitHandler, useForm } from "react-hook-form";
import { IRegisterFormData } from "../../Context/types/@types";
import useAuth from "../../Context/hooks/useAuth";
import { ButtonSubmit } from "../ButtonSubmit";
import { LoginWithSocialMedia } from "../LoginWithSocialMedia";
import { schemaRegisterForm } from "./schema";
import { StyledRegisterForm } from "./style";

export const RegisterForm = () => {
  const { handleSubmitRegister } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IRegisterFormData>({ resolver: yupResolver(schemaRegisterForm) });

  const submitRegister: SubmitHandler<IRegisterFormData> = (formData) => {
    console.log(formData);
    handleSubmitRegister(formData);
  };

  return (
    <StyledRegisterForm>
      <h1> Cadastre-se </h1>
      <form action="" onSubmit={handleSubmit(submitRegister)}>
        <label htmlFor="name">
          Nome completo <span> {errors.name?.message} </span>
        </label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu nome"
          {...register("name")}
        />
        <label htmlFor="dateBirth">
          Data de nascimento <span> {errors.dateBirth?.message} </span>
        </label>
        <input
          id="dateBirth"
          name="dateBirth"
          type="date"
          {...register("dateBirth")}
        />

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
          Senha (8 ou mais caracteres) <span> {errors.password?.message} </span>
        </label>
        <input
          id="password"
          name="password"
          type="password"
          placeholder="Digite sua senha"
          {...register("password")}
        />

        <label htmlFor="confirmPassword">
          Confirmar senha <span> {errors.confirmPassword?.message} </span>{" "}
        </label>
        <input
          id="confirmPassword"
          name="password"
          type="password"
          placeholder="Confirme sua senha"
          {...register("confirmPassword")}
        />

        <ButtonSubmit text={"Cadastre-se"} />
      </form>

      <div className="divider">
        <p className="line"></p>
        <p className="text"></p>
        <p className="line"></p>
      </div>

      <LoginWithSocialMedia />
    </StyledRegisterForm>
  );
};
