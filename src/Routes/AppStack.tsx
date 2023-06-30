import { Route, Routes } from "react-router-dom";
import AboutPage from "../Pages/AboutPage";
import BlogPage from "../Pages/BlogPage";
import { ContactPage } from "../Pages/ContactPage";
import { HomePage } from "../Pages/HomePage";
import ProjectsPage from "../Pages/ProjectsPage";

export default function AppStack() {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      {/* <Route path="/contato" element={<ContactPage />} />
      <Route path="about" element={<AboutPage />} />
      <Route path="projects" element={<ProjectsPage />} />
      <Route path="blog" element={<BlogPage />} /> */}
    </Routes>
  );
}
