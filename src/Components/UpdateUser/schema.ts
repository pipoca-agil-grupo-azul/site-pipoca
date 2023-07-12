import * as yup from "yup";

export const updateUserFormSchema = yup.object({
  name: yup.string().notRequired(),
  email: yup.string().notRequired(),
});
