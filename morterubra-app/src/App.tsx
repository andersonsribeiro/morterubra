import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Products from "./components/Home/Products";
import Lancamento from "./pages/Lancamento";

export default function App() {
  return (
    <div className=" max-sm:p-4 text-lg">
      <Header />
      <Home />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Products />} />
          <Route path="/lancamento" element={<Lancamento />} />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
