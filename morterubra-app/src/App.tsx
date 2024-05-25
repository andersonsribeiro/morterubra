import Footer from "./components/Footer";
import Header from "./components/Header";
import Home from "./components/Home";

export default function App() {
  return (
    <div className=" sm: p-4 text-lg">
      <Header />
      <Home />
      <Footer />
    </div>
  );
}
