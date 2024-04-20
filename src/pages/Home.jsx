import Header from "../components/Header";
import Hero from "../components/Hero";
import Nosotros from "../components/Nosotros";
import Projects from "../components/Projects";
import Services from "../components/Services";
import SubHero from "../components/SubHero";

const Home = () => {
  return (
    <div className="font-poppins">
      <Header />
      <Hero />
      <SubHero />
      <Services />
      <Projects />
      <Nosotros />
    </div>
  );
};

export default Home;
