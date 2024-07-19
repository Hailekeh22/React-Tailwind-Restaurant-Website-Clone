import React from "react";
import logo from "../assets/logo.png";

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
  return (
    <div className=" bg-lightBlue">
      <div className="container">
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
        </div>
      </div>
    </div>
  );
};

export default Navbar;
