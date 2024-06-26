import Header from "../components/Header";
import Hero from "../components/Hero";
import Diferenciadores from "../components/Diferenciadores";
import Projects from "../components/Projects";
import Services from "../components/Services";
import SubHero from "../components/SubHero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";


const Home = () => {
  return (
    <div className="font-poppins bg-gray-200">
      <Header />
      <Hero />
      <SubHero />
      <Services />
      <Projects />
      <Diferenciadores />
      <Contact />
      <Footer />
    </div>
  );
};

export default Home;
