import {
  FaFacebook,
  FaInbox,
  FaInstagram,
  FaLinkedin,
  FaLocationArrow,
  FaPhone,
  FaTwitter,
} from "react-icons/fa";

const Footer = () => {
  return (
    <div
      style={{
        backgroundImage: `url(https://i.postimg.cc/v8NfjGdH/13.jpg)`,
      }}
    >
      <div className="flex flex-col pt-20 pb-10 md:flex-row w-4/5 mx-auto items-center">
        <div className="space-y-3 md:w-1/2">
          <img
            className="w-14"
            src="https://i.postimg.cc/Nf6SDJWD/logo1.png"
            alt=""
          />
          <h3 className="font-rancho text-3xl font-bold">Espresso Emporium</h3>

          <p>
            Always ready to be your friend. Come & Contact with us to share your
            memorable moments, to share with your best companion.
          </p>

          <div className="flex gap-3 text-3xl">
            <FaFacebook />
            <FaTwitter />
            <FaInstagram />
            <FaLinkedin />
          </div>
          <h3 className="font-rancho text-3xl font-bold">Get in Touch</h3>

          <div>
            <p className="flex items-center">
              <FaPhone /> +88 01533 333 333
            </p>
            <p className="flex items-center">
              <FaInbox /> info@gmail.com
            </p>
            <p className="flex items-center">
              <FaLocationArrow /> 72, Wall street, King Road, Dhaka
            </p>
          </div>
        </div>
        <form
          noValidate=""
          className="flex flex-col py-6 space-y-6 md:py-0 md:px-6 w-full md:w-1/2"
        >
          <h3 className="font-rancho text-3xl font-bold">Connect with Us</h3>
          <input type="text" placeholder="name" className="input" />
          <input type="text" placeholder="email" className="input" />
          <textarea
            name="message"
            placeholder="message"
            rows="5"
            className="p-2"
          ></textarea>
        </form>
      </div>

      <div
        className="footer footer-center p-2 font-rancho text-white"
        style={{
          backgroundImage: `url(https://i.postimg.cc/52L4BWJt/24.jpg)`,
        }}
      >
        <aside>
          <p>Copyright Espresso Emporium ! All Rights Reserved</p>
        </aside>
      </div>
    </div>
  );
};

export default Footer;
