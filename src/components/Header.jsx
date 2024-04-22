import banner from "../assets/15.jpg";
import logo from "../assets/logo1.png";
const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(${banner})`,
      }}
      className="flex  justify-center"
    >
      <div className="flex items-center justify-center p-2">
        <img className="h-14" src={logo} alt="" />
        <p className="text-2xl md:text-5xl p-3 text-center text-white font-rancho">
          Espresso Emporium
        </p>
      </div>
    </div>
  );
};

export default Header;
