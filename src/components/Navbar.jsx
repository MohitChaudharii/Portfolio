import React from "react";
import logo from "../assets/MohitChaudhariLogo.png";
import {
  FaGithub,
  FaInstagram,
  FaLinkedin,
  FaTwitterSquare,
} from "react-icons/fa";

function Navbar() {
  return (
    <nav className="flex items-center justify-between py-6">
      <div className="flex flex-shrink-0 items-center">
        <a href="/" aria-label="Home">
          <img src={logo} alt="logo" className="mx-2" width={100} height={60} />            
        </a>
      </div>
      <div className="m-8 flex items-center justify-center gap-4 text-2xl">
        <a
          href="http://linkedin.com/in/mohit-chaudhari-m7421"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/MohitChaudharii"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/mohitaa.21/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
        >
          <FaInstagram />
        </a>

        <a
          href="/Home"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Twitter"
        >
          <FaTwitterSquare />
        </a>
      </div>
    </nav>
  );
}

export default Navbar;
