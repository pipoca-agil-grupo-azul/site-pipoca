import { yupResolver } from "@hookform/resolvers/yup";
import { useState } from "react";
import { useForm } from "react-hook-form";
import EmailChangePassword from "../../../Context/types/@types";
import { ButtonSubmit } from "../../ButtonSubmit";
import { StyledLoginForm } from "../../LoginForm/style";
import { sendEmailSchema } from "./schema";
import { ButtonRecoverPassword } from "./style";

export default function SendEmail() {
  const [email, setEmail] = useState("");
  const {
    formState: { errors },
  } = useForm<EmailChangePassword>({
    resolver: yupResolver(sendEmailSchema),
  });

  const onSubmitForm = async (event) => {
    event.preventDefault();

    // const userEmail = await fetch(
    //   `ttps://servidor-pipoca-production.up.railway.app/user/${email}`
    // );

    // if (!userEmail) {
    //   return (
    //     <div>
    //       {notifyFailed("Email não encontrado") as unknown as React.ReactNode}
    //     </div>
    //   );
    // }

    // return (
    //   <div>
    //     {
    //       notifySuccess(
    //         "Ação realizada com sucesso."
    //       ) as unknown as React.ReactNode
    //     }
    //   </div>
    // );
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
      <div className="divider">
        <p className="line"></p>
        <p className="text"></p>
        <p className="line"></p>
      </div>

      <ButtonRecoverPassword>
        <ButtonSubmit
          text={"Ir para o Login"}
          styles={{
            width: "80%",
            justifyContent: "center",
            backgroundColor: "white",
            borderColor: "red",
            color: "red",
          }}
          path="/login"
        />
        <ButtonSubmit
          text={"Ir para a Home"}
          styles={{ width: "50%", justifyContent: "center" }}
          path="/"
        />
      </ButtonRecoverPassword>
    </StyledLoginForm>
  );
}
