import AnimateLogo from "./AnimateLogo";
import NavBar from "./NavBar";
const Header = () => {
  return (
    <div className="z-20 sticky top-0 w-full bg-black text-white flex justify-between content-between font-jetbrains">
      <AnimateLogo />
      <NavBar />
    </div>
  );
};

export default Header;
