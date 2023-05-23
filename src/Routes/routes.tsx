import { Routes, Route } from "react-router-dom";
import { HomePage } from "../Pages/HomePage";
import { ContactPage } from "../Pages/ContactPage";

export const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={< HomePage />} />
            <Route path="/contato" element={< ContactPage />} />
        </Routes>
    );
};