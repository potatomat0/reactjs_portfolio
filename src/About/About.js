import React from "react";
import "./about.css";
import Fade from "react-reveal/Fade";
import { FcSlrBackSide, FcWorkflow, FcShop } from "react-icons/fc";
import profile from "../images/a.jpg";

const About = () => {
  return (
    <div className="container about-section" id="about">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-image">
              <img
                src={profile}
                alt="about_image"
              />
            </div>
          </div>
        </Fade>
        <Fade right>
          <div className="col-xl-6 col-lg-6 col-md-12 col-sm-12">
            <div className="about-details">
              <div className="about-title">
                <h5>Giới thiệu</h5>
                <span className="line"></span>
              </div>

              <Fade left>
                <p>          
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatibus! Dolore ipsum cupiditate deserunt maiores hic explicabo at blanditiis, quo harum pariatur sapiente, quam exercitationem fugiat eius, odit temporibus laudantium?
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatibus! Dolore ipsum cupiditate deserunt maiores hic explicabo at blanditiis, quo harum pariatur sapiente, quam exercitationem fugiat eius, odit temporibus laudantium?
                </p>
              </Fade>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default About;
