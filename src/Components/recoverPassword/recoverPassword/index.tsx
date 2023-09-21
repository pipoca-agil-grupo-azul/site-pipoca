import IChangePasswordData from "../../../Context/types/@types";
import { useForm } from "react-hook-form";
import { ButtonSubmit } from "../../ButtonSubmit";
import { StyledLoginForm } from "../../LoginForm/style";
import { ButtonRecoverPassword } from "../sendEmail/style";
import { useState } from "react";
import { yupResolver } from "@hookform/resolvers/yup";
import { recoverPasswordSchema } from "./schema";
import { useParams } from "react-router-dom";

export default function RecoverPassword() {
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const {
    formState: { errors },
  } = useForm<IChangePasswordData>({
    resolver: yupResolver(recoverPasswordSchema),
  });

  const onSubmitForm = (event) => {
    event.preventDefault();
  };

  const { token } = useParams()

  console.log(token)

  return (
    <StyledLoginForm>
      <h1> Recuperar senha </h1>
      <p className="recoverParagraph">
        Informe uma nova senha e confirme-a para ter acesso à nova senha.
      </p>
      <form onSubmit={(event) => onSubmitForm(event)}>
        <label htmlFor="email">
          Senha <span> {errors.newPassword?.message} </span>
        </label>
        <input
          id="newPassword"
          name="newPassword"
          type="password"
          placeholder="Digite sua nova senha"
          onChange={(event) => setNewPassword(event.target.value)}
          value={newPassword}
        />

        <label htmlFor="email">
          Confirme sua senha <span> {errors.confirmNewPassword?.message} </span>
        </label>
        <input
          id="confirmNewPasswod"
          name="confirmNewPassword"
          type="password"
          placeholder="Confirme sua senha"
          onChange={(event) => setConfirmNewPassword(event.target.value)}
          value={confirmNewPassword}
        />

        <ButtonSubmit text={"Enviar"} />
      </form>


      <ButtonRecoverPassword>
      
      </ButtonRecoverPassword>
      
    </StyledLoginForm>
  );
}
