import React, { useState } from "react";

const Ques = ({ ques, dificulty }) => {
  const setStyle = () => {
    return dificulty === "easy"
      ? "bg-green-50 border-green-500 text-green-500"
      : dificulty === "medium"
      ? "bg-blue-50 border-blue-500 text-blue-500"
      : "bg-red-50 border-red-500 text-red-500";
  };

  return (
    <article className="w-full text-left p-1 mt-6 md:mt-12 mb-12 md:mb-20">
      {/* <p
        className={`${setStyle()} border 
        w-fit rounded-full px-4 py-[2px] shadow-md text-xs
        `}
      >
        {dificulty}
      </p> */}
      <h3 className=" text-lg md:text-2xl lg:text-3xl font-semibold mt-3">
        {ques}
      </h3>
    </article>
  );
};

export default Ques;
