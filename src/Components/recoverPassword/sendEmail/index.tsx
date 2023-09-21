import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import IEmailChangePassword from "../../../Context/types/@types";
import { ButtonSubmit } from "../../ButtonSubmit";
import { StyledLoginForm } from "../../LoginForm/style";
import { sendEmailSchema } from "./schema";
import { ButtonRecoverPassword } from "./style";
import {
  notifyFailed,
  notifySuccess,
} from "../../../notifications/notifications";

export default function SendEmail() {
  const [email, setEmail] = useState("");
  const {
    formState: { errors },
  } = useForm<IEmailChangePassword>({
    resolver: yupResolver(sendEmailSchema),
  });

  const onSubmitForm = async (event) => {
    event.preventDefault();

    const userEmail = await fetch("http://localhost:8080/user/email", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: email,
    });

    if (!userEmail) {
      return (
        <div>
          {notifyFailed("Email não encontrado") as unknown as React.ReactNode}
        </div>
      );
    }

    return (
      <div>
        {
          notifySuccess(
            "Ação realizada com sucesso."
          ) as unknown as React.ReactNode
        }
      </div>
    );
  };

  return (
    <StyledLoginForm>
      <h1> Recuperar senha </h1>
      <p className="recoverParagraph">
        Informe seu email e lhe enviaremos todas as instruções para a
        recuperação de senha.
      </p>
      <form onSubmit={(event) => onSubmitForm(event)}>
        <label htmlFor="email">
          Email <span> {errors.email?.message} </span>
        </label>
        <input
          id="email"
          name="email"
          type="email"
          placeholder="Digite seu email"
          onChange={(event) => setEmail(event.target.value)}
          value={email}
        />

        <ButtonSubmit text={"Enviar"} />
      </form>
      

      <ButtonRecoverPassword>
      </ButtonRecoverPassword>
    </StyledLoginForm>
  );
}
