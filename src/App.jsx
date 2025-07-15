import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CountryDetail from "./pages/CountryDetail";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ThemeProvider from "./context/ThemeContext";
import NoPageFound from "./pages/NoPageFound";

export default function App() {
  return (
    <ThemeProvider>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/CountryDetail" element={<CountryDetail />} />
          <Route path="*" element={<NoPageFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </ThemeProvider>
  );
}
