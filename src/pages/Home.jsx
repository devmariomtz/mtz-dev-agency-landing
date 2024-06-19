import Header from "../components/Header";
import Hero from "../components/Hero";
import Diferenciadores from "../components/Diferenciadores";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import Projects from "../components/Projects";
import Services from "../components/Services";
import SubHero from "../components/SubHero";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import Form from "../components/Form";
import mtzAvatar from "../assets/mtzAvatar.jpg";

const Home = () => {
  return (
    <>
      <FloatingWhatsApp
        buttonClassName="animate-fade-up"
        // chatboxClassName="animate-fade-up"
        phoneNumber="+503 76476402"
        accountName="MTZ DEV AGENCY 🚀"
        avatar={mtzAvatar}
        statusMessage="Listos para innovar 📈"
        chatMessage="Hola! 👋🏻
¿En que podemos ayudarte?"
        placeholder="Escribe un mensaje..."
        notification="true"
        notificationSound="true"
        notificationDelay={1}
      />
      <div className="font-poppins bg-gray-200">
        <Header />
        <Hero />
        <SubHero />
        <Services />
        {/* <Projects /> */}
        <Diferenciadores />
        <a id="contact">
          <Form />
        </a>
        <Footer />
      </div>
    </>
  );
};

export default Home;
