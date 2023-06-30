import { Route, Routes } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import { ContactPage } from "../Pages/ContactPage";
import { HomePage } from "../Pages/HomePage";
import { LoginPage } from "../Pages/LoginPage";
import ProjectsPage from "../Pages/ProjectsPage";
import { RegisterPage } from "../Pages/RegisterPage";
import PrivateRoute from "./privateRoute.route";

export const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/login" element={<LoginPage />} />
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route
        path="/"
        element={
          <PrivateRoute>
            <HomePage />
          </PrivateRoute>
        }
      />
      <Route
        path="/contato"
        element={
          <PrivateRoute>
            <ContactPage />
          </PrivateRoute>
        }
      />
      <Route
        path="about"
        element={
          <PrivateRoute>
            <AboutPage />
          </PrivateRoute>
        }
      />
      <Route
        path="projects"
        element={
          <PrivateRoute>
            <ProjectsPage />
          </PrivateRoute>
        }
      />
      <Route
        path="blog"
        element={
          <PrivateRoute>
            <BlogPage />
          </PrivateRoute>
        }
      />
    </Routes>
  );
};
