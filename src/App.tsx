import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FixedIcons } from "./Components/FixedIcons";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { InformationPreHeader } from "./Components/InformationPreHeader";
import { AppRoutes } from "./Routes/routes";
import "./Styles/index.css";

function App() {
  return (
    <div>
      <InformationPreHeader />

      {<Header />}

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
