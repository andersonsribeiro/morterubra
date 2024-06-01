import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";
import Products from "./components/Home/Products";

export default function App() {
  return (
    <div className=" max-sm:p-4 text-lg">
      <Header />
      <Home />
      <Products />
      <Footer />
    </div>
  );
}
