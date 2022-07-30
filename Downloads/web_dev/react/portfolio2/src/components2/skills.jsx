import React from "react";
import HTML from "../assets/html.png";
import CSS from "../assets/css.png";
import JavaScript from "../assets/javascript.png";
import ReactImg from "../assets/react.png";
import Python from "../assets/python.png";
import Elm from "../assets/elm.png";
import Haskell from "../assets/haskell.png";
import C from "../assets/c.png";

const Skills = () => {
  return (
    <div className="bg-[#1d023f] py-40 w-full">
      <div
        name="skills"
        className="justify-center py-20 flex flex-col w-full h-full skills"
      >
        {/* main block */}
        <h1 className="text-5xl font-bold py-3 text-white px-8 head1">
          Skills;
        </h1>
        <div className="grid grid-cols-2 gap-4 p-10 text-center text-white">
          <p className="pt-12 head1 text-3xl">languages I've worked with;</p>
          {/* items */}
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={HTML} alt="" />
            <p className="text-2xl my-3">HTML</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={CSS} alt="" />
            <p className="text-2xl my-3">CSS</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={JavaScript} alt="" />
            <p className="text-2xl my-3">Javascript</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={ReactImg} alt="" />
            <p className="text-2xl my-3">React</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={Python} alt="" />
            <p className="text-2xl my-3">Python</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={C} alt="" />
            <p className="text-2xl my-3">C++/C</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={Haskell} alt="" />
            <p className="text-2xl my-3">Haskell</p>
          </div>
          <div className="bg-violet-900 rounded-lg p-5 langs">
            <img className="w-20 mx-auto" src={Elm} alt="" />
            <p className="text-2xl my-3">Elm</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
