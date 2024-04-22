import cup from "../assets/icons/1.png";
import cupbg from "../assets/4.png";
import coffeCup from "../assets/cup.png";
import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";

const PopularProducts = () => {
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
          <div className="bg-[#F5F4F1] gap-2 p-4 flex justify-evenly items-center rounded-lg ">
            <img className="lg:w-40 w-28 md:w-32 " src={coffeCup} alt="" />
            <div className="md:space-y-2">
              <p className="font-bold text-sm lg:text-lg">
                Name:
                <span className="font-normal ml-2 text-gray-500">
                  America kdfkjdk
                </span>
              </p>
              <p className="font-bold text-sm lg:text-lg">
                Chef:
                <span className="font-normal ml-2 text-gray-500">
                  hi kdfkjdk
                </span>
              </p>
              <p className="font-bold text-sm lg:text-lg">
                Price:
                <span className="font-normal ml-2 text-gray-500">
                  hi kdfkjdk
                </span>
              </p>
            </div>

            <div className="flex flex-col gap-2">
              <button className="bg-[#D2B48C] text-white p-2 rounded-sm">
                <IoMdEye className="md:text-xl" />
              </button>
              <button className="bg-black text-white p-2 rounded-sm">
                <FaPen className="md:text-xl" />
              </button>
              <button className="bg-[#EA4744] text-white p-2 rounded-sm">
                <MdDelete className="md:text-xl" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularProducts;
