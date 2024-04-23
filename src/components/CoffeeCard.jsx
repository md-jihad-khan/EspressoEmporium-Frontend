import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import coffeCup from "../assets/cup.png";

const CoffeeCard = ({ coffee, handleReload }) => {
  return (
    <div className="bg-[#F5F4F1] gap-2 p-4 flex justify-evenly items-center rounded-lg ">
      <img className="lg:w-40 w-28 md:w-32 " src={coffee.photo} alt="" />
      <div className="md:space-y-2">
        <p className="font-bold text-sm lg:text-lg">
          Name:
          <span className="font-normal ml-2 text-gray-500">{coffee.name}</span>
        </p>
        <p className="font-bold text-sm lg:text-lg">
          Chef:
          <span className="font-normal ml-2 text-gray-500">{coffee.chef}</span>
        </p>
        <p className="font-bold text-sm lg:text-lg">
          Price:
          <span className="font-normal ml-2 text-gray-500">{coffee.price}</span>
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
  );
};

export default CoffeeCard;
