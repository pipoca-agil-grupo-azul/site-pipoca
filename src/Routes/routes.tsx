import { Route, Routes } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import { ContactPage } from "../Pages/ContactPage";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import ProjectsPage from "../Pages/ProjectsPage";
import { RegisterPage } from "../Pages/RegisterPage";
import UpdateUser from "../Components/UpdateUser/UpdateUser";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/" element={<HomePage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="/update" element={<UpdateUser />} />
    </Routes>
  );
};
