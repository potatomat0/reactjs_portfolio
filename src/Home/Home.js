import React, { useEffect, useState } from "react";
import "./home.css";
import Typewriter from "typewriter-effect";
import Fade from "react-reveal/Fade";
import { Link } from "react-scroll";
import { BsFillSunFill, BsFillMoonStarsFill } from "react-icons/bs";
import MyPDF from "./vim-cheatsheet.pdf";

const Home = ({ toggleTheme, theme }) => {
  return (
    <div className="container-fluid home" id="home">
      <div className="theme-change" onClick={() => toggleTheme()}>
        {theme === "light" ? (
          <p className="theme-iconss">
            <BsFillMoonStarsFill size={40} />
          </p>
        ) : (
          <p className="theme-icon">
            <BsFillSunFill size={40} />
          </p>
        )}
      </div>

      <Fade left>
        <div className="container home-content">
          <h1 class="glitch" data-glitch="Tôi là:">Tôi là:</h1>
          <h2>
            <Typewriter
              options={{
                strings: [
                  "Sinh viên ITC",
                  "Web dev",
                  "Thiết kế UX/UI",
                  "Lập trình viên",
                  "Chúa hề 🤡",
                  "Mọt sách",
                ],
                autoStart: true,
                loop: true,
                delay: 5,
              }}
            />
          </h2>

          <div className="home-hireme-downloadcv-button">
            <Link
              to="contact"
              spy={true}
              smooth={true}
              offset={-100}
              duration={100}
            >
              <div className="hire-me-button">Hãy thuê tôi!</div>
            </Link>

            <div className="download-cv-button">
              <a href={MyPDF} download="vim-cheatsheet.pdf">
                Tải CV của tôi
              </a>
            </div>
          </div>
        </div>
      </Fade>
    </div>
  );
};

export default Home;
