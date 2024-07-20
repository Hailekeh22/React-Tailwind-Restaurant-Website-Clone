import React from "react";
import heroImg from "../../assets/hero.png";

const Hero = () => {
  return (
    <div className=" min-h-[550px] sm:min-h-[600px] items-center bg-lightBlue flex justify-center">
      <div className="container pb-8 sm:pb-0">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-14">
          <div className="flex flex-col justify-center gap-4 pt-12 sm:pt-0 sm:items-center sm:text-center lg:items-start lg:text-left">
            <h1 className=" text-8xl font-cursive text-primary">
              Rice
              <span className=" text-3xl text-black">Bowl</span>
            </h1>
            <p className="text-sm">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard dummy text
              ever since the 1500s, when an unknown printer took a galley of
              type and scrambled it to make a type specimen book. Lorem Ipsum
              has been the industry's standard dummy text ever since the 1500s,
              when an unknown printer took a galley of type and scrambled it to
              make a type specimen book.
            </p>
            <div>
              <button className="primary-btn">View Our menu</button>
            </div>
          </div>

          <div className=" min-h-[450px] flex  items-center justify-center relative order-1 sm:order-2">
            <img
              src={heroImg}
              className="max-w-[450px] mx-auto sm:scale-125 shadow-1"
            ></img>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
