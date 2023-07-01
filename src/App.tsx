import { useLocation } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { FixedIcons } from "./Components/FixedIcons";
import { Footer } from "./Components/Footer";
import { Header } from "./Components/Header";
import { InformationPreHeader } from "./Components/InformationPreHeader";
import { AppRoutes } from "./Routes/routes";
import "./Styles/index.css";

function App() {
  const { pathname } = useLocation();

  const showHeader = (URLValue: string) => {
    const options = {
      "/login": <Header style={{ display: "None" }} />,
      "/cadastro": <Header style={{ display: "None" }} />,
      "/": <Header />,
      "/about": <Header />,
      "/blog": <Header />,
      "/projects": <Header />,
      "/contato": <Header />,
    };

    if (options[URLValue]) {
      return options[URLValue];
    }
    return options[URLValue];
  };

  return (
    <div>
      <InformationPreHeader />

      {showHeader(pathname)}

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
