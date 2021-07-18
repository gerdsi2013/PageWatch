import React from "react";
import "../footer/stylo/index.scss";
import { FaGithubSquare } from "react-icons/fa";
import { AiOutlineLinkedin } from "react-icons/ai";
import { FiTwitter, FiInstagram } from "react-icons/fi";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <a href="https://github.com/gerdsi2013">
          <FaGithubSquare className="rede-socias" />
        </a>

        <a href="https://www.linkedin.com/in/gerd-santos-8298a7b2/">
          <AiOutlineLinkedin className="rede-socias" />
        </a>

        <a href="https://www.instagram.com/gerdssilva/">
          <FiInstagram className="rede-socias" />
        </a>
        <a href="https://twitter.com/Gerdlog">
          <FiTwitter className="rede-socias" />
        </a>
      </div>
      <p> 2021 &copy; Todos os Direitos Resevados.</p>
      <p>
        Desenvolvido por <span> Gerdivaldo</span>{" "}
      </p>
    </footer>
  );
}
