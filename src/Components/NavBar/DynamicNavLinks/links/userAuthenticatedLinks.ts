import { userUnAuthenticatedLinks } from "./userUnAuthenticatedlinks";

export const userAuthenticatedLinks = [
  ...userUnAuthenticatedLinks,
  // {
  //   id: 6,
  //   content: "Atualizar Perfil",
  //   url: "/update",
  // },
  // {
  //   id: 7,
  //   content: "Sair",
  //   url: "/",
  // },
  {
    id: 8,
    content: "Perfil",
    url: "/",
    submenu: [
      {
        id: 1,
        content: "Atualizar Perfil",
        url: "/update",
      },
      {
        id: 2,
        content: "Sair",
        url: "/",
      },
    ],
  },
];
