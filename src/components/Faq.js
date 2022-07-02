import React from "react";

function Faq({ heading }) {
  return (
    <div class="place-self-center grid grid-flow-row   ">
      <h1
        style={{ fontFamily: "Mulish, sans-serif" }}
        class=" font-bold self-center "
      >
        {heading}
      </h1>
      <p
        style={{ fontFamily: "Mulish, sans-serif" }}
        class="mt-4 text-gray-600 text-sm md:w-4/5 "
      >
        Magnam reprehenderit quisquam corporis sunt ratione. Non magnam et.
        Suscipit quia et aspernatur officiis quo. Officia sed eaque enim
        doloribus quisquam mollitia nihil.
      </p>
    </div>
  );
}

export default Faq;
