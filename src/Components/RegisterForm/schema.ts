import * as yup from "yup";

export const schemaRegisterForm = yup
  .object({
    name: yup.string().required("Nome obrigatório!"),
    dateBirth: yup.string().required("Preencha a data de nascimento!"),
    email: yup
      .string()
      .required("Email obrigatório!")
      .email("Preencha com um e-mail válido"),
    password: yup.string().required("Preencha o campo"),
    confirmPassword: yup
            .string()
            .oneOf([yup.ref("password")], "Falha na confirmação da senha!")
            .required("Confirme a senha!"),
  })
  .required();