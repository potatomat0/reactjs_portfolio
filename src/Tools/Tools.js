import React, { useState } from "react";
import "./Tools.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
import ToolList from "../tools.json";

const Tools = () => {
  const data = [
    {
      content:
        "Lập trình nên được đối xử như là một đam mê",
      name: "Obama Bin Laden",
      position: "Full stack software developer",
      img: "https://images.pexels.com/photos/5700184/pexels-photo-5700184.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      id: 1,
    }, 
  ];


  return (
    <div className="container testimonial-section" id="tools">
      <div className="testimonial">
        <Flip left>
          <h5>Những công cụ mình thuần thạo</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {ToolList && ToolList.map((item, index) => (
          <Fade right>
            <div className="col-lg-4 col-md-6 col-xl-4" key={item.id}>
              <div className={index === 0 ? "content-with-marked" : "content"}>
                <img src={item.img} alt="image" className="center-image" />

                <p>{item.name}</p>
              </div>
            </div>
          </Fade>
        ))}

      </div>
    </div>
  );
};

export default Tools;
