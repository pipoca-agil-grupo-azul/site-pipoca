import * as yup from "yup";

export const sendEmailSchema = yup.object({
  email: yup.string().required("O email precisa ser informado!"),
});
