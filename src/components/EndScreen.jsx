import React from "react";

const EndScreen = ({ scores, getLink }) => {
  return (
    <section className="w-full h-fit min-h-[90vh] border rounded-md p-6">
      <div className="w-full h-fit text-center">
        <img
          className="w-full max-w-[300px] mx-auto"
          src="finish.png"
          alt="you finished the quiz"
        />
        <p className="mt-6 text-xl font-semibold">
          You scored{" "}
          <span className="text-3xl leading-16 font-Barrio">
            {scores.score}
          </span>{" "}
          <br className="xs:hidden" /> out of{" "}
          <span className="text-4xl font-Barrio">{scores.total}</span>
        </p>
        <button
          onClick={() => getLink("home")}
          className="w-fit self-end cursor-pointer uppercase m-2 mt-8 border border-black px-6 py-1 rounded-md shadow-md bg-gradient-to-b from-yellow-100 to-yellow-500 text-black"
        >
          play again
        </button>
      </div>
    </section>
  );
};

export default EndScreen;
