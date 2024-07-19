import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { FaAlignRight } from "react-icons/fa";

const Menu = [
  {
    id: 1,
    name: "Noodle",
    link: "#",
  },
  {
    id: 2,
    name: "Rice",
    link: "#",
  },
  {
    id: 3,
    name: "Salad",
    link: "#",
  },
  {
    id: 4,
    name: "Beverages",
    link: "#",
  },
  {
    id: 5,
    name: "Kids",
    link: "#",
  },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);

  const toogleMenu = () => {
    setOpen(!open);
  };

  return (
    <div className=" bg-lightBlue">
      <div className="container relative">
        <div className="flex justify-between items-center">
          <div>
            <a href="#">
              {" "}
              <img src={logo} alt="Logo" className="w-36" />
            </a>
          </div>

          <div className=" hidden lg:flex justify-between items-center gap-4">
            <ul className=" hidden lg:flex justify-between gap-4">
              {Menu.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className=" inline-block text-xl p-4">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <div className=" lg:hidden">
            <button onClick={toogleMenu}>
              <FaAlignRight className=" text-2xl" />
            </button>

            {/* Dorp Down Menu */}

            {open && (
              <div className=" absolute right-3 top-28 bg-white shadow-lg mt-2 z-50 p-3 rounded-md">
                <ul>
                  {Menu.map((item) => (
                    <li key={item.id}>
                      <a
                        href={item.link}
                        className=" w-full inline-block hover:bg-primary hover:text-white text-xl px-11 py-5 rounded-md"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
