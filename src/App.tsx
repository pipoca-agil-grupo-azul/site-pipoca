import './Styles/index.css'
import { Header } from "./Components/Header";
import { AppRoutes } from './Routes/routes';
import { Footer } from './Components/Footer';
import { InformationPreHeader } from './Components/InformationPreHeader';
import { FixedIcons } from './Components/FixedIcons';

function App() {

  return (
    <div>
      <InformationPreHeader/>

      <Header />

      <FixedIcons/>

      <AppRoutes />

      <Footer />
    </div>
  )
}

export default App
