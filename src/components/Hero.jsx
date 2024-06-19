import { TypeAnimation } from "react-type-animation";
import hero from "../assets/hero.svg";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col">
      <span className="md:tracking-wider md:leading-normal animate-fade-down text-[2.4em] font-black text-center pt-12 md:pt-0 md:text-7xl">
        CONSTRUYAMOS ALGO{" "}
        <span className="font-jetbrains font-normal">EXTRAORDINARIO</span>
      </span>
      <div className="flex flex-col xl:flex-row lg:flex-row">
        <div className="w-full flex flex-col items-center xl:p-5 lg:p-5 xl:items-end lg:items-end lg:gap-4">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "UNA PAGINA WEB 🌐",
              2100,
              "UNA NUEVA APP 📱",
              2100,
              "UN SISTEMA 👨🏻‍💻",
              2100,
              "UN E-COMMERCE 🛒",
              2100,
            ]}
            speed={40}
            className="text-center text-[1.7em] p-2 lg:text-4xl lg:text-end font-bold w-full text-blue-700"
            repeat={Infinity}
          />
          <a
            href="#contact"
            className="flex items-center justify-center animate-jump-in w-[50%] text-center xl:text-2xl lg:text-2xl bg-blue-700 hover:bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded"
          >
            <span className="text-2xl md:text-3xl lg:text-3xl block md:animate-wiggle-more md:animate-infinite">
              🚀
            </span>{" "}
            <span className="pl-2">CUENTANOS TU IDEA</span>
          </a>
        </div>
        <img
          src={hero}
          alt=""
          className="animate-fade-left w-full p-4 hidden xl:block lg:block xl:w-[45%] lg:w-[40%]"
        />
      </div>
    </div>
  );
};

export default Hero;
