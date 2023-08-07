import * as yup from "yup";

export const recoverPasswordSchema = yup.object({
  email: yup.string().required("O email precisa ser informado!"),
});
