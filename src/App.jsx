import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import About from "./components/About";
import Programs from "./components/Programs";
import Trainers from "./components/Trainers";
import Membership from "./components/Membership";
import Testimonials from "./components/Testimonials";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Programs />
      <Trainers />
      <Membership />
      <Testimonials />
      <Gallery />
      <About />
      <Contact />
      <Footer />

    </>
  );
}

export default App;