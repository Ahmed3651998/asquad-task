import React from "react";

function BDCards({ heading, parag }) {
    return ( 
        <div class = "flex flex-col items-center  p-8 shadow-lg rounded-lg bg-white" >
            <h1 style = { { fontFamily: "Mulish, sans-serif"} } class = "text-black font-bold self-center text-2xl md:text-4xl" >
                { heading }
            </h1>
            <p style = {{ fontFamily: "Mulish, sans-serif" }} class = " text-gray-600 text-center text-sm leading-normal" >
                { parag } { " " } 
            </p>
        </div>
    );
}

export default BDCards;