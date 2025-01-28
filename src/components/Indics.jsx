import React, { useState } from "react";

const Indics = ({ ques, totalQues, score, total }) => {
  return (
    <div className="w-full p-4">
      <div className="w-full h-[10px] mb-4 ] bg-white shadow-md border rounded-full flex items-start justify-start overflow-hidden">
        <div
          className={`bg-gradient-to-b from-yellow-400 to-yellow-800 h-full duration-500 rounded-full`}
          style={{
            width: `${(ques / totalQues) * 100}%`,
          }}
        ></div>
      </div>
      <div className="w-full flex items-center justify-between">
        <p>
          Question : <span className="text-4xl">{ques}</span>/{totalQues}
        </p>
        <p>
          <span className="text-4xl">{score}</span>/{total}
        </p>
      </div>
    </div>
  );
};

export default Indics;
