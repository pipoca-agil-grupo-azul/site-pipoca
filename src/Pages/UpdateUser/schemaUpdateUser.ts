import * as yup from "yup";

export const updateUserSchema = yup.object({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
  password: yup.string().notRequired(),
});
