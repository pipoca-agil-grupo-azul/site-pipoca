import "./Styles/index.css";
import { Header } from "./Components/Header";
import { AppRoutes } from "./Routes/routes";
import { Footer } from "./Components/Footer";
import { InformationPreHeader } from "./Components/InformationPreHeader";
import { FixedIcons } from "./Components/FixedIcons";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div>
      <InformationPreHeader />

      <Header />

      <FixedIcons />

      <AppRoutes />

      <Footer />

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default App;
