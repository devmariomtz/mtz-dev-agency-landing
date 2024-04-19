import AnimateLogo from "./AnimateLogo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="w-full bg-black text-white flex justify-between content-between font-jetbrains">
      <AnimateLogo />
      <NavBar />
    </div>
  );
};

export default Header;
