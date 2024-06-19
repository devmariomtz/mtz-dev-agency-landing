import { TypeAnimation } from "react-type-animation";

const Hero = () => {
  return (
    <div className="w-full h-full flex flex-col  lg:p-20 xl:p-20">
      <span className="animate-fade-down text-[2em] font-black text-center p-4 lg:text-4xl xl:text-5xl">
        CONSTRUYAMOS ALGO EXTRAORDINARIO
      </span>
      <div className="flex flex-col xl:flex-row lg:flex-row">
        <div className="w-full flex flex-col items-center xl:p-5 lg:p-5 xl:items-end lg:items-end lg:gap-4">
          <TypeAnimation
            sequence={[
              // Same substring at the start will only be typed once, initially
              "UNA PAGINA WEB 🌐",
              1500,
              "UNA NUEVA APP 📱",
              1500,
              "UN SISTEMA 👨🏻‍💻",
              1500,
              "UN E-COMMERCE 🛒",
              1500,
            ]}
            speed={40}
            className="text-center text-[1.7em] p-2 lg:text-4xl lg:text-end font-bold w-full text-blue-700"
            repeat={Infinity}
          />
          <a
            href="#contact"
            className="flex items-center justify-center animate-jump-in w-[50%] text-center xl:text-2xl lg:text-2xl bg-blue-700 hover:bg-blue-500 cursor-pointer text-white font-bold py-2 px-4 border-b-4 border-blue-900 hover:border-blue-700 rounded"
          >
            <span className="text-2xl md:text-3xl lg:text-3xl block animate-wiggle-more animate-infinite">
              🚀
            </span>{" "}
            <span className="pl-2">CUENTANOS TU IDEA</span>
          </a>
        </div>
        <img
          src="src/assets/hero.svg"
          alt=""
          className="animate-fade-left w-full p-4 hidden xl:block lg:block xl:w-[45%] lg:w-[40%]"
        />
      </div>
    </div>
  );
};

export default Hero;
