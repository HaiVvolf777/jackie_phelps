import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/layout/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Service from "./pages/Service";
import Contact from "./pages/Contact";
import Footer from "./components/layout/Footer";
import BookAppointment from "./pages/BookAppointment";
import PrivacyPolicy from "./pages/PrivacyPolicy";
import TermsOfUse from "./pages/TermOfUse";
import Page from "./pages/Page";

function App() {
  return (
    <BrowserRouter>
        <Navbar />

        <Routes>
          <Route path="/" element={<Page />} />
          <Route path="/home" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Service />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<BookAppointment />} />
          <Route path='/privacy' element={<PrivacyPolicy/>} />
          <Route path='/terms' element={<TermsOfUse/>} />
        </Routes>
        <Footer />
    </BrowserRouter>
  );
}

export default App;
