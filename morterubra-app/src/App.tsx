import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home/Home";

export default function App() {
  return (
    <div className=" max-sm:p-4 text-lg">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
