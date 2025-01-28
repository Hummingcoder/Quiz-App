import React, { useEffect, useState } from "react";
import Ques from "./Ques";
import Indics from "./Indics";

const Quiz = ({
  setScores,
  scores,
  loading,
  error,
  ques,
  currentQuestion,
  changeQues,
}) => {
  const [choices, setchoices] = useState([]);

  const [hasanswer, setHasAnswer] = useState(false);

  const getAnswer = (ans) => {
    if (ans === ques[currentQuestion].correct_answer) {
      setScores((prev) => ({ ...prev, score: prev.score + 12 }));
    }
    setHasAnswer(true);
  };

  function randomizeChoices(q) {
    if (!q || !q.incorrect_answers || !q.incorrect_answers) return [];
    let combine = [...q.incorrect_answers, q.correct_answer];
    return combine.sort((i) => Math.random() - 0.5);
  }

  function decodeHtmlEntities(encodedStr) {
    const parser = new DOMParser();
    const decodedStr = parser.parseFromString(encodedStr, "text/html")
      .documentElement.textContent;
    return decodedStr;
  }

  useEffect(() => {
    if (!ques) return;
    setHasAnswer(false);
    const result = randomizeChoices(ques[currentQuestion]);

    setchoices(result);
  }, [ques, currentQuestion]);

  if (loading) {
    return (
      <div className="w-full flex flex-col gap-6 items-center justify-start pt-32 shadow-md p-2 border rounded-md h-[90vh]">
        <img
          className="w-[50px] h-[50px] object-contain animate-spin"
          src="waiting.png"
          alt="loading please wait"
        />
        <p className="text-xl font-Barrio">Loading</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="w-full h-[90vh] flex flex-col gap-1 items-center justify-center shadow-md p-2 border rounded-md ">
        <img
          className="w-[80%] h-[300px] object-contain max-w-[380px] "
          src="error.png"
          alt="loading please wait"
        />
        <p>{error}, please try again.</p>
      </div>
    );
  }

  return (
    <div className="w-full h-fit shadow-md p-2 pt-12 border rounded-md min-h-[90vh]">
      {ques && (
        <section className="w-full max-w-[768px] mx-auto min-h-full flex flex-col items-center justify-start text-center">
          <Indics
            {...scores}
            ques={currentQuestion + 1}
            totalQues={ques.length}
          />
          <Ques
            ques={decodeHtmlEntities(ques[currentQuestion].question)}
            dificulty={ques[currentQuestion].difficulty}
          />
          <div className="flex w-full min-h-[100px] xs:flex-row flex-col flex-wrap items-center justify-center gap-3 md:gap-4">
            {choices.map((i) => (
              <button
                onClick={() => getAnswer(i)}
                className={`${
                  hasanswer === true
                    ? i === ques[currentQuestion].correct_answer
                      ? "bg-gradient-to-b from-yellow-100 to-emerald-500 px-10 py2 text-xl"
                      : "bg-gradient-to-b from-yellow-100 to-rose-500"
                    : "bg-gradient-to-b from-white to-yellow-200"
                } w-fit border px-6 py-1 rounded-full shadow-md hover:scale-105 border-black duration-300 cursor-pointer`}
                key={i}
              >
                {decodeHtmlEntities(i)}
              </button>
            ))}
          </div>
          <button
            onClick={() => hasanswer === true && changeQues()}
            className={`w-fit self-end  uppercase m-2 mt-12 border border-black px-6 py-1 rounded-md shadow-md bg-gradient-to-b from-yellow-100 to-yellow-500 text-black ${
              hasanswer === true
                ? "cursor-pointer opacity-100"
                : "cursor-not-allowed opacity-20"
            }`}
          >
            next
          </button>
        </section>
      )}
    </div>
  );
};

export default Quiz;
