import { useLoaderData } from "react-router-dom";
import { Link } from "react-router-dom";
import { IoMdArrowBack } from "react-icons/io";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();

  const handleUpdateCoffee = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const price = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const UpdatedCoffee = {
      name,
      chef,
      supplier,
      price,
      category,
      details,
      photo,
    };
    fetch(`https://espressoemporium.onrender.com/coffee/${coffee._id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(UpdatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            icon: "success",
            title: "Success",
            text: "Coffee Updated Successfully",
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

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
            <h3 className="font-rancho text-5xl mb-5 mt-3">Update Coffee</h3>
          </div>

          <form className="p-4" onSubmit={handleUpdateCoffee}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">Name</span>
                </label>
                <input
                  type="text"
                  name="name"
                  placeholder="Enter coffee name"
                  className="input bg-white"
                  required
                  defaultValue={coffee.name}
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
                  defaultValue={coffee.chef}
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
                  defaultValue={coffee.supplier}
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text font-semibold text-xl">
                    Price
                  </span>
                </label>
                <input
                  type="text"
                  name="taste"
                  placeholder="Enter coffee Price"
                  className="input  bg-white"
                  required
                  defaultValue={coffee.price}
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
                  defaultValue={coffee.category}
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
                  defaultValue={coffee.details}
                />
              </div>
            </div>
            <div className="form-control">
              <label className="label">
                <span className="label-text font-semibold text-xl">Photo</span>
              </label>
              <input
                type="text"
                defaultValue={coffee.photo}
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
              Update Coffee
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default UpdateCoffee;
