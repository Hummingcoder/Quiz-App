import React, { useEffect, useState } from "react";
import Home from "./components/Home";
import Quiz from "./components/Quiz";
import EndScreen from "./components/EndScreen";

const App = () => {
  const [currPage, setCurrPage] = useState("home");
  const [link, setLink] = useState(null);
  const [isOnline, setIsOnline] = useState(navigator.onLine);
  const [currentQuestion, setcurrentQuestion] = useState(0);
  const [scores, setScores] = useState({
    score: 0,
    total: 0,
  });

  const [ques, setques] = useState(null);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(true);

  const getLink = (pg, link = "") => {
    if (pg === "quiz") {
      setCurrPage("quiz");
      setLink(link);
    } else if (pg === "home") {
      setCurrPage("home");
      setLink("");
      setScores({
        score: 0,
        total: 0,
      });
      setcurrentQuestion(0);
    } else {
      setCurrPage("end");
    }
  };

  const changeQues = () => {
    if (currentQuestion < ques.length - 1) {
      setcurrentQuestion((prev) => prev + 1);
    } else {
      getLink("end");
    }
  };

  useEffect(() => {
    if (!link) return;
    const fetchData = async () => {
      setLoading(true);
      try {
        const res = await fetch(link);
        const data = await res.json();

        data.results && data.results.length > 0
          ? setques(data.results)
          : setError("something went wrong");
        setLoading(false);

        setScores((prev) => ({ ...prev, total: data.results.length * 12 }));
      } catch (err) {
        console.log(err);
      }
    };

    fetchData();

    window.addEventListener("online", () => setIsOnline(true));
    window.addEventListener("offline", () => setIsOnline(false));

    return () => {
      window.removeEventListener("online", () => setIsOnline(true));
      window.removeEventListener("offline", () => setIsOnline(false));
    };
  }, [link]);

  if (!isOnline) {
    return (
      <div className="w-full h-screen flex flex-col gap-1 items-center justify-center shadow-md p-2 border rounded-md ">
        <img
          className="w-[80%] h-[300px] object-contain max-w-[380px] "
          src="offline.png"
          alt="loading please wait"
        />
        <p>unable to connect</p>
      </div>
    );
  }

  return (
    <main>
      <section className="w-full text-right h-[50px] flex items-center justify-end px-4 lg:px-7 bg-transparent">
        {currPage !== "home" && (
          <button
            className="cursor-pointer p-1 px-4 "
            onClick={() => getLink("home")}
          >
            Home
          </button>
        )}
        <a
          className="ml-6 mr-2 flex items-center justify-center gap-1 p-1"
          href="https://github.com/Hummingcoder/Quiz-App"
        >
          <img className="max-w-[24px]" src="github.svg" alt="go to github" />
          Github
        </a>
      </section>
      <div className="p-4 lg:p-6 lg:pt-0 pt-1">
        {currPage === "home" && <Home getLink={getLink} />}
        {currPage === "quiz" && (
          <Quiz
            ques={ques}
            error={error}
            loading={loading}
            scores={scores}
            setScores={setScores}
            changeQues={changeQues}
            currentQuestion={currentQuestion}
            link={link}
          />
        )}
        {currPage === "end" && <EndScreen getLink={getLink} scores={scores} />}
      </div>
    </main>
  );
};

export default App;
