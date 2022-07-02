import React from "react";

function Cards({ heading, parag, img }) {
  return (
    <div class=" lg:m-8 m-4  -mt-10 w-auto lg:w-44 md:h-30 place-content-center text-center pt-8 pb-8 p-6 shadow-lg rounded-lg bg-white place-items-center grid grid-flow-row ">
      <img src={img} alt="user"/>
      <h1
        style={{ fontFamily: "Mulish, sans-serif" }}
        class="text-black font-bold self-center text-2xl md:text-4xl"
      >
        {heading}
      </h1>
      <p
        style={{ fontFamily: "Mulish, sans-serif" }}
        class="mt-4 text-gray-600 text-center text-sm leading-normal  "
      >
        {parag}{" "}
      </p>
    </div>
  );
}

export default Cards;
