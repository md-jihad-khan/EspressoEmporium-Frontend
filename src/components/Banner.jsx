import bannner from "../assets/3.png";
const Banner = () => {
  return (
    <div className="relative">
      <div
        className="hero min-h-[calc(100vh-90px)]"
        style={{
          backgroundImage: `url(${bannner})`,
        }}
      >
        <div className="hero-content  md:text-left text-white ">
          <div className="max-w-2xl  absolute lg:right-[10vw] ">
            <h1 className="mb-5 text-5xl font-bold font-rancho">
              Would you like a Cup of Delicious Coffee?
            </h1>
            <p className="mb-5 ">
              It's coffee time - Sip & Savor - Relaxation in every sip! Get the
              nostalgia back!! Your companion of every moment!!! Enjoy the
              beautiful moments and make them memorable.
            </p>
            <button className="btn bg-[#E3B577] text-xl text-black border-0 font-rancho">
              Learn more
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
