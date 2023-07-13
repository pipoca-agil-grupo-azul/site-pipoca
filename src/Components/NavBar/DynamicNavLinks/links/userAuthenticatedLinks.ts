import { userUnAuthenticatedLinks } from "./userUnAuthenticatedlinks";

export const userAuthenticatedLinks = [
  ...userUnAuthenticatedLinks,
  {
    id: 6,
    title: "Atualizar Perfil",
    url: "/update",
  },
  {
    id: 7,
    title: "Sair",
    url: "/",
  },
];
