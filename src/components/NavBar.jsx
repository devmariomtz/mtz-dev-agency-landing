// border-solid border-2 border-red-600
const NavBar = () => {
  return (
    <div className="w-[40%] flex items-center">
      <nav className="w-[100%]">
        <ul className="flex justify-around">
          <li className="animate-fade-down">
            <a
              href="/"
              className="hover:underline underline-offset-8"
            >
              Home
            </a>
          </li>
          <li className="animate-fade-down">
            <a href="/about" className="hover:underline underline-offset-8">
              About us
            </a>
          </li>
          <li className="animate-fade-down">
            <a href="/contact" className="hover:underline underline-offset-8">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default NavBar;
