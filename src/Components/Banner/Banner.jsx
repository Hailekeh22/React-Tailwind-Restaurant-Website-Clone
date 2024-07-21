import React from "react";
import banner from "../../assets/banner.png";

const Banner = () => {
  return (
    <div>
      <div className=" container mt-4 ">
        <div className="grid grid-cols-1 sm:gri lg:grid-cols-2 gap-4 place-items-center place-content-center">
          <div className="order-2 lg:order-1 shadow-1">
            <img src={banner} />
          </div>
          <div className="order-1 lg:order-2">
            <div className="flex flex-col gap-4 px-6 py-4">
              <h2>About</h2>
              <h2 className=" font-cursive text-4xl text-primary font-bold">
                Fresh Bowl
              </h2>
              <p>
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industry's standard dummy
                text ever since the 1500s, when an unknown printer took a galley
                of type and scrambled it to make a type specimen book.
              </p>
              <div>
                <button className=" primary-btn">Special Offers</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Banner;
