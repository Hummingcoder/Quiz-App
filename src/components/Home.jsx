import React, { useState } from "react";

const Home = ({ getLink }) => {
  const [categories, setCategories] = useState([
    {
      img: "knowledge.png",
      title: "General Knowledge",
      link: "https://opentdb.com/api.php?amount=10&category=9&difficulty=easy&type=multiple",
    },
    {
      img: "history-book.png",
      title: "History",
      link: "https://opentdb.com/api.php?amount=9&category=23&difficulty=medium&type=multiple",
    },
    {
      img: "watching-a-movie.png",
      title: "Movies & Entertainment",
      link: "https://opentdb.com/api.php?amount=7&category=11&difficulty=medium&type=multiple",
    },
    {
      img: "earth.png",
      title: "Geography",
      link: "https://opentdb.com/api.php?amount=11&category=22&difficulty=medium&type=multiple",
    },
    {
      img: "car.png",
      title: "Vehicle",
      link: "https://opentdb.com/api.php?amount=8&category=28&difficulty=medium&type=multiple",
    },
    {
      img: "straw-hat.png",
      title: "Anime & Manga",
      link: "https://opentdb.com/api.php?amount=12&category=31&difficulty=medium&type=multiple",
    },
  ]);

  return (
    <div className="w-full h-fit border rounded-md min-h-[90vh] pt-4 pb-20">
      <section className="w-full max-w-[768px] mx-auto min-h-full flex flex-col items-center justify-center text-center">
        <img
          className="w-full max-w-[400px] px-6 py-3"
          src="question.png"
          alt="test your knowledge"
        />
        <h1 className="font-Barrio text-4xl xs:text-5xl sm:text-6xl">
          Test Your Knowledge!
        </h1>
        <p className="text-xl md:text-2xl px-1 font-bold mt-3 lg:mt-6 mb-8 lg:mb-12">
          Select a topic below to start your Quiz
        </p>
        <div className="flex flex-wrap gap-3 lg:gap-5 items-center justify-center text-base lg:text-lg">
          {categories.map((cat) => (
            <button
              onClick={() => getLink("quiz", cat.link)}
              className="w-fit flex font-semibold items-center justify-center gap-2 px-3 md:px-7 py-2 md:py-3 border bg-gradient-to-b from-white to-yellow-200 hover:scale-[102%]
                active:border-2 focus:border-2  border-black rounded-md cursor-pointer shadow-md"
              key={cat.title}
            >
              <img
                className="w-[40px] h-[40px] md:w-[50px] md:h-[50px] object-contain"
                src={cat.img}
                alt={cat.title + " image"}
              />
              {cat.title}
            </button>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Home;
