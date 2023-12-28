import { Routes, Route } from "react-router-dom";

import Register from "./login/Components/RegisterYupCopy1";
import ForgotPassword from "./login/Components/ForgotPassword";
import Mdashboard from "./login/Components/Mdashboard";
import Blank from "./components/Blank";
import { Nav } from "./components/Nav";
import { Footer } from "./components/Footer";
import Home from "./login/Components/Home";
import Navigation from "./components/navigation/Navigation";

function App() {

  return (
    <>
    
    
    <Routes>
      <Route path="/*" element={<Mdashboard />} />
      <Route path="/blank" element={<Blank />} />
      <Route path="/Login" element={<Mdashboard />} />

      <Route path="/Reset" element={<ForgotPassword />} />

      <Route path="/Register" element={<Register />} />
    </Routes>
    <Footer />
    </>
  );
}
export default App;
