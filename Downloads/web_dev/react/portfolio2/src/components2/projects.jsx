import React, { useState } from "react";
import WorkImg from "../assets/workImg.jpeg";
import vector_calc from "../assets/vector_calc.png";
import hospital from "../assets/hospital.jpg";
export default function Work() {
  let [link, setLink] = useState(
    "https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7"
  );
  let [itr, setItr] = useState(Number(0)); // iterator for list of project links (items)
  const chng_link = () => {
    let items = [
      "https://cs1xd3.online/ShowModulePublish?modulePublishId=0e98300a-ec67-4d9c-80d1-1c38973a2683",
      "https://cs1xd3.online/ShowModulePublish?modulePublishId=89ccba37-9e4d-445b-b0fa-59beaa18b25a",
      "https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7",
    ];
    let newItr = itr;
    if (newItr == items.length) newItr = 0;
    let newLink = link;
    newLink = items[newItr];
    newItr++;
    setLink(newLink);
    setItr(newItr);
    // console.log(itr, link);
  };

  return (
    <div name="projects" className="w-full text-white bg-[#1d023f] pt-12">
      <div className="mx-auto px-8 flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <h1 className="text-5xl font-bold py-3 head1">Projects;</h1>
        </div>
        {/* Main block */}
        <div className="grid sm:grid-cols-1  md:grid-cols-2 gap-4">
          {/* item-1*/}
          <div
            style={{ backgroundImage: `url(${vector_calc})` }}
            className="p-5 shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 text-2xl">
              <span className="text-2xl font-bold text-white tracking-wider">
                Vector Calculator
              </span>
              <div>
                made with elm, helps in visualizing vector operations.
                <br />
                <a
                  href="https://cs1xd3.online/ShowModulePublish?modulePublishId=8a5076e8-edea-422d-991b-f8a2044161e7"
                  target="blank"
                >
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Demo
                  </button>
                </a>
                <a href="/">
                  <button className="text-center rounded-lg px-4 m-2 bg-white text-black font-bold text-lg">
                    Code
                  </button>
                </a>
              </div>
              Live demo below! ⬇️
            </div>
          </div>
          {/* item-2 */}
          <div
            style={{ backgroundImage: `url(${hospital})` }}
            className="p-5 shadow-lg shadow-[#040c16] group container rounded-xl flex justify-center items-center mx-auto content-div"
          >
            {/*Hover Effects*/}
            <div className="opacity-0 group-hover:opacity-100 text-2xl">
              <span className="text-2xl font-bold text-white tracking-wider">
                DB management System
              </span>
              <div>
                Made with tkinter-python and sqlite, Stores and performs
                operations on data used by a hosptial
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
      {/* item-3 */}
      <div className="">
        <iframe
          className="animate m-5 rounded-2xl mx-auto"
          id="proj"
          src={link}
          frameBorder={0}
          width="85%"
          height={500}
        />
        {/* padding gives dist b/w border and text */}
        <button
          onClick={chng_link}
          className="bg-violet-800 p-5 text-3xl rounded-3xl flex mx-auto link1"
        >
          More ➡️
        </button>
      </div>
    </div>
  );
}
