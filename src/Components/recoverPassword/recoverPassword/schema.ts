import * as yup from "yup";

export const recoverPasswordSchema = yup.object({
  newPassword: yup
    .string()
    .matches(/(\d)/, "Deve conter pelo menos 1 número!")
    .matches(/[a-z]/, "Deve conter pelo menos 1 letra minuscula!")
    .matches(/[A-Z]/, "Deve conter pelo menos 1 letra maiúscula!")
    .matches(/(\W|_)/, "Deve conter pelo menos 1 carácter especial!")
    .matches(/.{8,}/, "Deve conter pelo menos 8 caracteres!")
    .required("Digite a senha!"),
  confirmNewPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Falha na confirmação da senha!")
    .required("Confirme a senha!"),
});
