import React from "react";
import { foodsData } from "../../assets/data.js";

const Menu = () => {
  return (
    <div className=" container bg-primary py-6 w-full">
      {/* Tittle */}
      <div className=" flex items-center justify-center mb-5">
        <h2 className=" text-3xl text-white font-sans">Our Menu</h2>
      </div>

      {/* Menu List */}
      <div className="grid gap-4 grid-cols-2 lg:grid-cols-4 ">
        {foodsData.map((food) => (
          <div className=" flex items-center flex-col justify-center rel border-2 p-1 rounded-3xl hover:border-yellow-500">
            <img className="shadow-1" src={food.img} />
            <div className="flex flex-col gap-3 items-center justify-center">
              <p className=" text-2xl lg:text-4xl font-cursive text-white">
                {food.name}
              </p>
              <p className=" font-sans text-2xl">Price - {food.price}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Menu;
