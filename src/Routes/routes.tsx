import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { ContactPage } from "../Pages/ContactPage";
import { LoginPage } from "../Pages/LoginPage";
import { RegisterPage } from "../Pages/RegisterPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/contato" element={< ContactPage />} />
            <Route path="/cadastro" element={< RegisterPage />} />
            <Route path="/login" element={< LoginPage />} />
        </Routes>
    );
};