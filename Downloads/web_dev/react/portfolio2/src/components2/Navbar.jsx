//rfc -> normal func, rafce -> arrow func
import React, { useState } from "react";
import { FaBars, FaTimes, FaGithub, FaLinkedin } from "react-icons/fa";
import { HiOutlineMail } from "react-icons/hi";
import { Link } from "react-scroll";

export default function Navbar() {
  const [nav, setNav] = useState(false);
  const handleClick = () => {
    setNav(!nav);
    console.log(nav);
  };

  return (
    <div className="navbar fixed w-full lg:h-[60px] h-[40px] flex justify-between items-center px-4 text-white">
      <a href="/"><div className="las text-4xl">LAS*</div></a>
      {/*menu*/}
      <div>
        <ul className="navList hidden md:flex text-2xl">
          <li className="link1">
            <Link className="navLink" to="home" smooth={true} duration={500}>
              Home
            </Link>
          </li>
          <li className="link1">
            <Link className="navLink" to="projects" smooth={true} duration={500}>
              Projects
            </Link>
          </li>
          <li className="link1">
            <Link className="navLink" to="skills" smooth={true} duration={500}>
              Skills
            </Link>
          </li>
          <li className="link1">
            <Link className="navLink" to="About" smooth={true} duration={500}>
              About
            </Link>
          </li>
        </ul>
      </div>
      {/*Hamburger*/}
      {/* md:hidden -> stays hidden if size is > md (~700px) */}
      {/*https://tailwindcss.com/docs/z-index*/}
      <div
        onClick={handleClick}
        className={
          "hamb absolute right-10 md:hidden z-10 text-3xl p-5"
        }
      >
        {!nav ? <FaBars /> : <FaTimes />}
      </div>
      {/*Mobile menu*/}
      <ul
        link1
        className={
          nav
            ? "md:hidden absolute top-0 left-0 w-full h-screen bg-[#1d023f] flex flex-col justify-center items-center"
            : "hidden"
        }
      >
        <li className="p-6 text-4xl link1">
          <Link className="navLink" onClick={handleClick} to="home" smooth={true} duration={500}>
            Home
          </Link>
        </li>
        <li className="p-6 text-4xl link1">
          <Link
            className="navLink"
            onClick={handleClick}
            to="projects"
            smooth={true}
            duration={500}
          >
            Projects
          </Link>
        </li>
        <li className="p-6 text-4xl link1">
          <Link className="navLink" onClick={handleClick} to="skills" smooth={true} duration={500}>
            Skills
          </Link>
        </li>
      </ul>
      {/*Social icons*/}
      <div>
        <ul className="socials hidden md:flex text-3xl">
          <li>
            <a
              href="https://github.com/LaeekAhmed"
              target="_blank"
              className="opacity-70 hover:opacity-100"
            >
              <FaGithub />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/laeek-ahmed-shaikh-4098171b5/"
              target="_blank"
              className="opacity-70 hover:opacity-100"
            >
              <FaLinkedin />
            </a>
          </li>
          <li>
            <a
              href="mailto:laeek385@gmail.com"
              className="opacity-70 hover:opacity-100"
            >
              <HiOutlineMail />
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
}
