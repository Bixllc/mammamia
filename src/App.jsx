import Nav from "./components/Nav";
import Hero from "./components/Hero";
import Gallery from "./components/Gallery";
import FlavorSheet from "./components/FlavorSheet";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div id="top">
      <Nav />
      <main>
        <Hero />
        <Gallery />
        <FlavorSheet />
      </main>
      <Footer />
    </div>
  );
}
