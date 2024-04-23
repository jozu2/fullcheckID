import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Basic/Home";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import WhyRegister from "./pages/Basic/WhyRegister";
import BenefitPage from "./pages/Basic/BenefitPage";
import Requirements from "./pages/Basic/Requirements";
import AboutUs from "./pages/Basic/AboutUs";
import Contact from "./pages/Basic/Contact";
import Privacy from "./pages/Basic/Privacy";
import AntibribePolicy from "./pages/Basic/AntibribePolicy";
// import Profile from "./pages/Basic/Profile";
import TermsAndConditions from "./pages/Basic/TermsAndConditions";
import Login from "./pages/Login/Login";
import ForgotPass from "./pages/Login/ForgotPass";
import Registration from "./pages/Registration/Registration";
function App() {
  return (
    <Router>
      <Routes>
        {/* LOGIN */}
        <Route path="/login" element={<Login />} />
        <Route path="/forgot-password" element={<ForgotPass />} />
        {/* RESGISTRATION */}
        <Route
          path="/registration"
          element={
            <>
              <Navbar />
              <Registration />
              <Footer />
            </>
          }
        />
        <Route
          path="/*"
          element={
            <>
              <Navbar />
              <Routes>
                {/* BASIC PAGES */}
                <Route path="/" element={<Home />} />
                <Route path="/why-register" element={<WhyRegister />} />
                <Route path="/benefits" element={<BenefitPage />} />
                <Route path="/requirements" element={<Requirements />} />
                <Route path="/about-us" element={<AboutUs />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/privacy" element={<Privacy />} />
                <Route path="/antibribe-policy" element={<AntibribePolicy />} />
                {/* <Route path="/profile" element={<Profile />} /> */}
                <Route
                  path="/terms-and-conditions"
                  element={<TermsAndConditions />}
                />
              </Routes>
              <Footer />
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
