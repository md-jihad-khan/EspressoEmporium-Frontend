const CoffeAbout = () => {
  return (
    <div className="bg-[#ECEAE3] ">
      <div className="grid grid-cols-2 gap-9 lg:flex lg:justify-between w-4/5 mx-auto p-6 ">
        <div className="text-[#331A15] space-y-2">
          <img src="https://i.postimg.cc/wxRLC3c4/1.png" alt="" />
          <h3 className="font-rancho text-3xl"> Awesome Aroma</h3>
          <p className="text-sm">
            You will definitely be a fan of the design & aroma of your coffee
          </p>
        </div>

        <div className="text-[#331A15] space-y-2">
          <img src="https://i.postimg.cc/zf3VTPx2/2.png" alt="" />
          <h3 className="font-rancho text-3xl">High Quality</h3>
          <p className="text-sm">
            We served the coffee to you maintaining the best quality
          </p>
        </div>
        <div className="text-[#331A15] space-y-2">
          <img src="https://i.postimg.cc/MH0TWkGH/3.png" alt="" />
          <h3 className="font-rancho text-3xl"> Pure Grades</h3>
          <p className="text-sm">
            The coffee is made of the green coffee beans which you will love
          </p>
        </div>
        <div className="text-[#331A15] space-y-2">
          <img src="https://i.postimg.cc/bJ9crq17/4.png" alt="" />
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
