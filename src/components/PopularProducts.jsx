import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";
import { Link } from "react-router-dom";

const PopularProducts = () => {
  const [coffees, setCoffees] = useState([]);
  const [reload, setReload] = useState(null);

  const handleReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    fetch("https://espressoemporium.onrender.com/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, [reload]);

  return (
    <div className="relative">
      <img
        className="absolute -z-10 top-20"
        src="https://i.postimg.cc/x134L6Xm/4.png"
        alt=""
      />
      <div className="w-4/5 mx-auto py-20">
        <div className="text-center space-y-4">
          <h5 className="text-xl r">--- Sip & Savor ---</h5>
          <h2 className="text-5xl font-rancho font-bold text-[#331A15]  ">
            Our Popular Products
          </h2>
          <Link
            to={"/addCoffee"}
            className="btn bg-[#E3B577] text-white font-rancho"
          >
            <img
              src="https://i.postimg.cc/wxRLC3c4/1.png"
              className="w-4"
              alt=""
            />{" "}
            Add Coffee
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5  mt-6">
          {coffees.map((coffee) => (
            <CoffeeCard
              key={coffee._id}
              coffee={coffee}
              handleReload={handleReload}
            ></CoffeeCard>
          ))}
        </div>
      </div>
      <img
        className="absolute bottom-0 right-0 -z-10"
        src="https://i.postimg.cc/zXnt1xSQ/5.png"
        alt=""
      />
    </div>
  );
};

export default PopularProducts;
