import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "../../Components/ButtonSubmit";
import { StyledLoginForm } from "../../Components/LoginForm/style";
import { IUpdateUserFormData } from "../../Context/types/@types";
import { updateUserSchema } from "./schemaUpdateUser";
import { StyledUpdateUserPage } from "./style";

export default function UpdateUserPage() {
  const [newName, setNewName] = useState("");
  const [newEmail, setNewEmail] = useState("");

  const {
    formState: { errors },
  } = useForm<IUpdateUserFormData>({ resolver: yupResolver(updateUserSchema) });

  const handleUpdateUserCredentials = () => {
    return;
  };

  return (
    <StyledUpdateUserPage>
      <StyledLoginForm>
        <form onSubmit={handleUpdateUserCredentials}>
          <h1>Atualização de credenciais de usuário</h1>
          <label htmlFor="email">
            Nome atual <span> {errors.email?.message} </span>
          </label>
          <input
            id="name"
            name="name"
            type="text"
            placeholder="Nome"
            value={newName}
            onChange={(event) => setNewName(event.target.value)}
          />

          <label htmlFor="email">
            Email atual <span> {errors.email?.message} </span>
          </label>
          <input
            id="email"
            name="email"
            type="email"
            placeholder="Digite seu email"
            value={newEmail}
            onChange={(event) => setNewEmail(event.target.value)}
          />

          <ButtonSubmit text={"Entre"} />
        </form>
      </StyledLoginForm>
    </StyledUpdateUserPage>
  );
}
