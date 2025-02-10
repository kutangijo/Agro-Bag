import Contact from "./components/Contact";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Produk from "./components/Produk";
import Whyus from "./components/Whyus";

const App = () => {
  return (
    <div className="bg-[#E7E8E7]">
      <Navbar />
      <Hero />
      <Whyus />
      <Produk />
      <Contact />
      <Footer />
    </div>
  );
};

export default App;
