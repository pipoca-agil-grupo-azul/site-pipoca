import { ButtonSubmit } from "../ButtonSubmit";
import { StyledRegisterForm } from "../RegisterForm/style";
import useAuth from "../../Context/hooks/useAuth";
import { SubmitHandler, useForm } from "react-hook-form";
import { IUpdateUserFormData } from "../../Context/@types";
import { yupResolver } from "@hookform/resolvers/yup";
import { updateUserFormSchema } from "./schema";

export default function UpdateUser() {
  const { handleUpdateUser } = useAuth();

  const {
    handleSubmit,
    //formState: { errors },
  } = useForm<IUpdateUserFormData>({
    resolver: yupResolver(updateUserFormSchema),
  });

  const submitUpdate: SubmitHandler<IUpdateUserFormData> = (
    updateUserFormData
  ) => {
    handleUpdateUser(updateUserFormData);
  };

  return (
    <StyledRegisterForm>
      <h1> Altere seu perfil </h1>
      <form action="" onSubmit={handleSubmit(submitUpdate)}>
        <label htmlFor="name">Nome completo</label>
        <input
          id="name"
          name="name"
          type="text"
          placeholder="Digite seu novo nome"
        />

        <label htmlFor="email">Email</label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu novo e-mail"
        />

        <ButtonSubmit text={"Alterar"} />
      </form>

      <div className="divider">
        <p className="line"></p>
        <p className="text"></p>
        <p className="line"></p>
      </div>
    </StyledRegisterForm>
  );
}
