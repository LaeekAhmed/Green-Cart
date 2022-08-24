import React, { useState } from "react";
import portfolio from "../assets/portfolio.png";
import hospital from "../assets/hospital.jpg";
import vector from "../assets/vector.png";
import notes from "../assets/Notes.png";

export default function Work() {
  let [link, setLink] = useState(
    "https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7"
  );
  let [itr, setItr] = useState(Number(0)); // iterator for list of project links (items)
  const chng_link = () => {
    let items = [
      "https://nodeproject11.herokuapp.com/"
      ,"https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7"];
    let newItr = itr;
    if (newItr == items.length) newItr = 0;
    let newLink = link;
    newLink = items[newItr];
    newItr++;
    setLink(newLink);
    setItr(newItr);
    //console.log(itr, link);
  };

  return (
    <div name="projects" className="w-full text-white pt-12">
      <h1 className="text-5xl font-bold p-8 head1">Projects;</h1>
      <div className="mx-auto px-8 flex flex-col flex-wrap justify-center w-10/12 h-full">
        <div className="pb-8"></div>
        {/* Main block */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-4">
          {/* item-1*/}
          <div
            style={{ backgroundImage: `url(${notes})` }}
            className="p-5 shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 text-lg p-1">
              <span className="text-lg font-bold text-white tracking-wider">
                Note-Spot
              </span>
              <div>
              Note sharing Web-App which allows users to share, download and upload notes (pdfs, docs,
              images etc) from a pool. Somewhat similar to youtube but has notes instead of videos.

                <br />
                <a
                  href="https://nodeproject11.herokuapp.com/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/LaeekAhmed/NoteSpot" target="blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              Live demo below! ⬇️
            </div>
          </div>
          {/* item-2*/}
          <div
            style={{ backgroundImage: `url(${vector})` }}
            className="p-5 shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 text-lg p-1">
              <span className="text-lg font-bold text-white tracking-wider">
                Vector Calculator
              </span>
              <div>
              calculator built to perform operations like addition, subtraction, scaling, transformations, and
              magnitude calculation on Vectors with graphical visualization.
                <br />
                <a
                  href="https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://cs1xd3.online/ShowModulePublish?modulePublishId=c9e5f087-eddf-4e3d-b1e0-7ef9ea97fba4 " target="blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              Live demo below! ⬇️
            </div>
          </div>
          {/* item-3*/}
          <div
            style={{ backgroundImage: `url(${portfolio})` }}
            className="p-5 shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 text-lg p-1">
              <span className="text-lg font-bold text-white tracking-wider">
                Personal Portfolio (this webpage)
              </span>
              <div>
                built using react, this website exhibits all technologies I’ve worked with and projects I’ve worked on
                <br />
                <a
                  href="https://laeekahmed.github.io/Portfolio-React/"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="https://github.com/LaeekAhmed/Portfolio-React" target="blank">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
          {/* item-4 */}
          <div
            style={{ backgroundImage: `url(${hospital})` }}
            className="p-5 shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 text-lg p-1">
              <span className="text-lg font-bold text-white tracking-wider">
                DB management System
              </span>
              <div>
              Data-base management system for a hospital with various features to maintain records of patients and employees and perfrom various features on it.
                <br />
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a
                  href="https://github.com/LaeekAhmed/Hospital-Management-Sysytem"
                  target="_blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="">
        <iframe
          className="animate m-5 mt-10 rounded-2xl mx-auto"
          id="proj"
          src={link}
          frameBorder={0}
          width="85%"
          height={600}
        />
        {/* padding gives dist b/w border and text */}
        <button
          onClick={chng_link}
          className="bg-violet-800 p-5 text-3xl rounded-3xl flex mx-auto link1"
        >
          Next ➡️
        </button>
      </div>
    </div>
  );
}
