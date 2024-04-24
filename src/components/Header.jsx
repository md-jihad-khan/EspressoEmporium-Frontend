const Header = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.postimg.cc/L8tqH1nv/15.jpg)`,
      }}
      className="flex  justify-center"
    >
      <div className="flex items-center justify-center p-2">
        <img
          className="h-14"
          src="https://i.postimg.cc/Nf6SDJWD/logo1.png"
          alt=""
        />
        <p className="text-2xl md:text-5xl p-3 text-center text-white font-rancho">
          Espresso Emporium
        </p>
      </div>
    </div>
  );
};

export default Header;
