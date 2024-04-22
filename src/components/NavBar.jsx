import { useState } from "react";
const NavBar = () => {
  const [open, setOpen] = useState(false);
  const toggle = () => {
    if (open) document.getElementById("burger").blur();
    setOpen(!open);
  };
  return (
    <>
      <div className="animate-jump p-4 z-40 lg:hidden xl:hidden">
        <button
          className="relative group"
          onClick={toggle}
          // onBlurCapture={toggle}
          id="burger"
        >
          <div className="relative flex overflow-hidden items-center justify-center rounded-full w-[50px] h-[50px] transform transition-all  ring-0 ring-gray-300 hover:ring-8 group-focus:ring-4 ring-opacity-30 duration-200 shadow-md">
            <div className="flex flex-col pt-1 justify-between w-[20px] h-[20px] transform transition-all duration-100 origin-center overflow-hidden group-focus:rotate-90">
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 group-focus:w-0 delay-75"></div>
              <div className="bg-white h-[2px] w-7 rounded transform transition-all duration-300 group-focus:w-0 delay-75"></div>
              <div className="bg-white h-[2px] w-7 transform transition-all duration-300 group-focus:w-0 delay-75"></div>
              <div className=" w-0 h-0  overflow-hidden transform transition-all duration-300 group-focus:w-12 group-focus:h-12 group-focus:-mt-2 delay-150">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-6 w-6h-6 w-6  text-white"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  // stroke-width="2"
                  strokeWidth="2"
                >
                  <path
                    // stroke-linecap="round"
                    // stroke-linejoin="round"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M19 9l-7 7-7-7"
                  />
                </svg>
              </div>
            </div>
          </div>
        </button>
      </div>
      <div
        className={
          open
            ? "text-black z-30 animate-fade-right absolute h-full w-full bg-blue-900 bg-clip-padding backdrop-filter backdrop-blur-sm bg-opacity-10"
            : "hidden"
        }
      >
        <nav className="w-full h-full flex justify-center">
          <ul className="flex flex-conpl justify-center items-center gap-10 my-[33%]">
            <li className="animate-fade-up">
              <a href="/" className="hover:underline underline-offset-8">
                Inicio 🏠
              </a>
            </li>
            <li className="animate-fade-up">
              <a href="/about" className="hover:underline underline-offset-8">
                Quienes somos 🤝🏻
              </a>
            </li>
            <li className="animate-fade-up">
              <a href="/contact" className="hover:underline underline-offset-8">
                Contacto 📞
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <div className="hidden xl:flex lg:flex w-[40%] items-center p-4">
        <nav className="w-full">
          <ul className="flex justify-around">
            <li className="animate-fade-down">
              <a href="/" className="hover:underline underline-offset-8">
                INICIO
              </a>
            </li>
            <li className="animate-fade-down">
              <a href="/about" className="hover:underline underline-offset-8">
                SOBRE NOSOTROS
              </a>
            </li>
            <li className="animate-fade-down">
              <a href="/contact" className="hover:underline underline-offset-8">
                CONTACTO
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
};

export default NavBar;
