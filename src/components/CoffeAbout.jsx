import cup from "../assets/icons/1.png";
import quality from "../assets/icons/2.png";
import pure from "../assets/icons/3.png";
import rosting from "../assets/icons/4.png";

const CoffeAbout = () => {
  return (
    <div className="bg-[#ECEAE3] ">
      <div className="grid grid-cols-2 gap-9 lg:flex lg:justify-between w-4/5 mx-auto p-6 ">
        <div className="text-[#331A15] space-y-2">
          <img src={cup} alt="" />
          <h3 className="font-rancho text-3xl"> Awesome Aroma</h3>
          <p className="text-sm">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div className="text-[#331A15] space-y-2">
          <img src={quality} alt="" />
          <h3 className="font-rancho text-3xl">High Quality</h3>
          <p className="text-sm">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="text-[#331A15] space-y-2">
          <img src={pure} alt="" />
          <h3 className="font-rancho text-3xl"> Pure Grades</h3>
          <p className="text-sm">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="text-[#331A15] space-y-2">
          <img src={rosting} alt="" />
          <h3 className="font-rancho text-3xl"> Proper Roasting</h3>
          <p className="text-sm">
            Your coffee is brewed by first roasting the green coffee beans
          </p>
        </div>
      </div>
    </div>
  );
};

export default CoffeAbout;
