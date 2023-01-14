import React from "react";

const About = () => {
  return (
    <div className="py-40 w-full">
      <div
        name="About"
        className="justify-center py-20 flex flex-col w-full h-full skills"
      >
        {/* main block */}
        <h1 className="text-4xl font-bold py-1 text-white px-8 head1">
          About me;
        </h1>
        {/*Container*/}
        <div className="text-white w-full mx-auto px-[3rem] flex flex-col justify-center h-full">
          <br /><br />
          <p className="about text-2xl">I am a Computer Science student 💻 at McMaster University with overall 4 years of experience.
          <br /><br />
          I started my journey with python back in high school where I learned the basics of programming, logic, databases and file systems.
          <br /><br />
          In my final year of high school 🎓, I along with 2 of my teammates worked on our first project, a Graphical user interface (GUI) database system - The Hospital Management System 🏥 using Tkinter Python and SQLite which I further improved later in May 2022.
          <br /><br />
          After coming to University, I got the chance to learn multiple languages like Haskell, C++/C, Java, Elm and covered topics 📝 like DSA, Discrete Maths, OOP, Development Basics, Computer Architecture, Databases, Software Dev. and the list goes on ....

          <br /><br />
          With that, I also started web development and learned a few other languages and frameworks/technologies like react - JS, Node - JS, Express, MongoDB, HTML/CSS and made multiple projects trying to make use of the new things that I learned.
          <br /><br />
          To conclude, my current goal 🎯 is to gain more experience in the field by working for a company trying to implement what I learned.

          </p>
        </div>
      </div>
    </div>
  );
};

export default About;
