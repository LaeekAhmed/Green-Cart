import React from "react";
import violet1 from "../assets/violet.jpg";
import violet2 from "../assets/violet2.png";

const Home = () => {
  return (
    <div
      // style={{ backgroundImage: `url(${violet1})` }}
      name="home"
      className="comp w-full h-screen"
    >
      {/*Container*/}
      <div className="text-white max-w-[1000px] mx-auto px-8 flex flex-col justify-center h-full">
        <p className="text-4xl">👋 Hi, my name is</p>
        <h1 className="las text-6xl font-bold py-3">Laeek Ahmed Shaikh</h1>
        <h2 className="text-4xl text-purple-400">
          CS-Student, Developer, Programmer ?
        </h2>
      </div>
    </div>
  );
};

export default Home;
