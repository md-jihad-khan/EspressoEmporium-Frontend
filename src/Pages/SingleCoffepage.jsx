import { IoMdArrowBack } from "react-icons/io";
import { Link, useLoaderData } from "react-router-dom";

const SingleCoffepage = () => {
  const coffee = useLoaderData();

  return (
    <div>
      <div className="md:w-4/5 mx-auto p-5">
        <Link
          to={"/"}
          className="hover:bg-[#D2B48C] rounded-md flex items-center gap-2 w-32 "
        >
          <IoMdArrowBack className="text-xl" />
          <p className="font-rancho text-2xl font-bold"> Back to home</p>
        </Link>

        <div className="bg-[#F4F3F0] p-5 rounded-lg mt-4">
          <div className="hero-content flex-col justify-evenly lg:flex-row">
            <img className="w-56" src={coffee.photo} alt="" />
            <div>
              <p className="font-bold text-sm lg:text-lg">
                Name:
                <span className="font-normal ml-2 text-gray-500">
                  {coffee.name}
                </span>
              </p>
              <p className="font-bold text-sm lg:text-lg">
                Chef:
                <span className="font-normal ml-2 text-gray-500">
                  {coffee.chef}
                </span>
              </p>
              <p className="font-bold text-sm lg:text-lg">
                Price:
                <span className="font-normal ml-2 text-gray-500">
                  {coffee.price}
                </span>
              </p>
              <p className="font-bold text-sm lg:text-lg">
                Supplier:
                <span className="font-normal ml-2 text-gray-500">
                  {coffee.supplier}
                </span>
              </p>

              <p className="font-bold text-sm lg:text-lg">
                category:
                <span className="font-normal ml-2 text-gray-500">
                  {coffee.category}
                </span>
              </p>
              <p className="font-bold text-sm lg:text-lg">
                details:
                <span className="font-normal ml-2 text-gray-500">
                  {coffee.details}
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleCoffepage;
