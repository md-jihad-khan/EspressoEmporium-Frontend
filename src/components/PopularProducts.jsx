import cup from "../assets/icons/1.png";
import cupbg from "../assets/4.png";
import shelterbg from "../assets/5.png";
import { useEffect, useState } from "react";
import CoffeeCard from "./CoffeeCard";

const PopularProducts = () => {
  const [coffees, setCoffees] = useState([]);
  const [reload, setReload] = useState(null);

  const handleReload = () => {
    setReload(!reload);
  };

  useEffect(() => {
    fetch("http://localhost:5000/coffees")
      .then((res) => res.json())
      .then((data) => setCoffees(data));
  }, [reload]);

  return (
    <div className="relative">
      <img className="absolute -z-10 top-20" src={cupbg} alt="" />
      <div className="w-4/5 mx-auto py-20">
        <div className="text-center space-y-4">
          <h5 className="text-xl r">--- Sip & Savor ---</h5>
          <h2 className="text-5xl font-rancho font-bold text-[#331A15]  ">
            Our Popular Products
          </h2>
          <button className="btn bg-[#E3B577] text-white font-rancho">
            <img src={cup} className="w-4" alt="" /> Add Coffee
          </button>
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
      <img className="absolute bottom-0 right-0 -z-10" src={shelterbg} alt="" />
    </div>
  );
};

export default PopularProducts;
