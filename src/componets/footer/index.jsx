import React from "react";
import "../footer/stylo/index.scss";
import { FiInstagram } from "react-icons/fi";
import { AiOutlineFacebook,AiOutlineLinkedin} from "react-icons/ai";
import { FiTwitter} from "react-icons/fi";

export function Footer() {
  return (
    <footer className="footer">
      <div className="footer-icons">
        <FiInstagram className="rede-socias" />
        <AiOutlineFacebook className="rede-socias" />
        <AiOutlineLinkedin className="rede-socias" />
        <FiTwitter className="rede-socias" />
      </div>
      <p> &copy;2021 Todos os Direitos Resevados</p>
    </footer>
  );
}
