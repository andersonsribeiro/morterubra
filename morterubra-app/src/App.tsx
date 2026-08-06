import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Lancamento from "./pages/Lancamento";
import BaraNoSeidou from "./pages/baranoseidou/Page";
import PoliticaDeTrocaEDevolucao from "./pages/PoliticaDeTrocaEDevolucao";
import ProductPage from "./pages/product/ProductPage";

export default function App() {
  return (
    <div className=" max-sm:p-4 text-lg">
      <Header />

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lancamento" element={<Lancamento />} />
          <Route path="/:bandSlug/:albumSlug" element={<ProductPage />} />
          <Route path="/bara-no-seidou" element={<BaraNoSeidou />} />
          <Route
            path="/politica-de-troca-e-devolucao"
            element={<PoliticaDeTrocaEDevolucao />}
          />
        </Routes>
      </BrowserRouter>

      <Footer />
    </div>
  );
}
