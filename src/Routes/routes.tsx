import { Route, Routes } from "react-router-dom";
import RecoverPassword from "../Components/recoverPassword/recoverPassword";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import { ContactPage } from "../Pages/ContactPage";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import ProjectsPage from "../Pages/ProjectsPage";
import { RegisterPage } from "../Pages/RegisterPage";
import SendEmail from "../Components/recoverPassword/sendEmail";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/contato" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="blog" element={<BlogPage />} />
      <Route path="/recover" element={<SendEmail />} />
      <Route path="/recoverPassword" element={<RecoverPassword />} />
    </Routes>
  );
};
