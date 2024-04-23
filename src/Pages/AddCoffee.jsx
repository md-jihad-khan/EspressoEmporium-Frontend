import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";

const AddCoffee = () => {
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
          <div className="max-w-xl pb-10  text-center mx-auto">
            <h3 className="font-rancho text-5xl mb-5 mt-3">Add New Coffee</h3>
            <p className="text-sm text-[#1B1A1AB3]">
              It is a long established fact that a reader will be distraceted by
              the readable content of a page when looking at its layout. The
              point of using Lorem Ipsum is that it has a more-or-less normal
              distribution of letters, as opposed to using Content here.
            </p>
          </div>

          <form className="p-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input  bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">Chef</span>
                </label>
                <input
                  type="text"
                  name="chef"
                  placeholder="Enter coffee chef"
                  className="input  bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Supplier
                  </span>
                </label>
                <input
                  type="text"
                  name="supplier"
                  placeholder="Enter coffee supplier"
                  className="input  bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Taste
                  </span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee taste"
                  className="input  bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Category
                  </span>
                </label>
                <input
                  type="text"
                  name="category"
                  placeholder="Enter coffee category"
                  className="input  bg-white"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Details
                  </span>
                </label>
                <input
                  type="text"
                  name="details"
                  placeholder="Enter coffee details"
                  className="input  bg-white"
                  required
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl">Photo</span>
              </label>
              <input
                type="text"
                name="photo"
                placeholder="Enter Photo URL"
                className="input  bg-white"
                required
              />
            </div>
            <button
              type="submit"
              className="bg-[#D2B48C] btn mt-4 w-full font-rancho text-xl "
            >
              Add Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddCoffee;
