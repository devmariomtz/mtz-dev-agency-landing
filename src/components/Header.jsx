import AnimateLogo from "./AnimateLogo";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="w-screen bg-black text-white flex justify-between content-between font-jetbrains p-3">
      <AnimateLogo />
      <NavBar />
    </div>
  );
};

export default Header;
