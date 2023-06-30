import { Routes, Route } from "react-router-dom";
import { RegisterPage } from "../Pages/RegisterPage";
import { LoginPage } from "../Pages/LoginPage";

export default function AuthStack() {
  return (
    <Routes>
      <Route path="/cadastro" element={<RegisterPage />} />
      <Route path="/login" element={<LoginPage />} />
    </Routes>
  );
}
