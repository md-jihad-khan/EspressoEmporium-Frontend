import { IoMdEye } from "react-icons/io";
import { FaPen } from "react-icons/fa";
import { MdDelete } from "react-icons/md";
import PropTypes from "prop-types";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";

const CoffeeCard = ({ coffee, handleReload }) => {
  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:5000/coffee/${id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            if (data.deletedCount > 0) {
              handleReload();
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success",
              });
            }
          });
      }
    });
  };

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
        <Link
          to={`coffee/${coffee._id}`}
          className="bg-[#D2B48C] text-white p-2 rounded-sm"
        >
          <IoMdEye className="md:text-xl" />
        </Link>
        <Link
          to={`updateCoffee/${coffee._id}`}
          className="bg-black text-white p-2 rounded-sm"
        >
          <FaPen className="md:text-xl" />
        </Link>
        <button
          className="bg-[#EA4744] text-white p-2 rounded-sm"
          onClick={() => handleDelete(coffee._id)}
        >
          <MdDelete className="md:text-xl" />
        </button>
      </div>
    </div>
  );
};

CoffeeCard.propTypes = {
  coffee: PropTypes.object,
  handleReload: PropTypes.func,
};

export default CoffeeCard;
