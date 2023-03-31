import React, { useState } from "react";
import "./WorkExperience.css";
import Flip from "react-reveal/Flip";

import { GrWorkshop } from "react-icons/gr";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const WorkExperience = () => {
  const data = [
    {
      name: "Google",
      position: "Full stack developer",
      year: "2018-2019",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatibus! Dolore ipsum cupiditate deserunt maiores hic explicabo at blanditiis, quo harum pariatur sapiente, quam exercitationem fugiat eius, odit temporibus laudantium?",
      techused: [
        {
          techname: "Python",
        },
        {
          techname: "Django",
        },
        {
          techname: "MongoDB",
        },
      ],
    },

    {
      name: "Facebook",
      position: "Junior developer",
      year: "2019-2020",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatibus! Dolore ipsum cupiditate deserunt maiores hic explicabo at blanditiis, quo harum pariatur sapiente, quam exercitationem fugiat eius, odit temporibus laudantium?",
      techused: [
        {
          techname: "Nuxt js",
        },
        {
          techname: "React js",
        },
        {
          techname: "Express js",
        },
      ],
    },
    {
      name: "Facebook",
      position: "Junior developer",
      year: "2020-2021",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatibus! Dolore ipsum cupiditate deserunt maiores hic explicabo at blanditiis, quo harum pariatur sapiente, quam exercitationem fugiat eius, odit temporibus laudantium?",
      techused: [
        {
          techname: "PHP",
        },
        {
          techname: "MySQL",
        },
        {
          techname: "Laravel",
        },
      ],
    },
    {
      name: "Facebook",
      position: "Junior developer",
      year: "2021-2022",
      des: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Laudantium, voluptatibus! Dolore ipsum cupiditate deserunt maiores hic explicabo at blanditiis, quo harum pariatur sapiente, quam exercitationem fugiat eius, odit temporibus laudantium?",
      techused: [
        {
          techname: "Rust",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "GraphQL",
        },
        {
          techname: "ReactJS",
        },
      ],
    },
  ];

  const colors = [
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#0088FE",
    "#00C49F",
    "#FFBB28",
    "#FF8042",
    "#001CCE",
    "#00C79F",
    "#FFBB24",
    "#FF1042",
    "#FF1042",
  ];

  return (
    <div className="container" id="workexperience">
      <div className="section-title">
        <Flip left>
          <h5>Kinh nghiệm qua từng năm</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <VerticalTimeline>
        {data.map((item, index) => (
          <VerticalTimelineElement
            contentStyle={{ background: colors[index], color: "#fff" }}
            contentArrowStyle={{ borderRight: "7px solid  rgb(33, 150, 243)" }}
            date={item.year}
            dateClassName="date"
            iconStyle={{ background: colors[index], color: "#fff" }}
            icon={<GrWorkshop color="white"/>}
          >
            <h3 className="vertical-timeline-element-titles">{item.name}</h3>
            <h4 className="vertical-timeline-element-subtitles">
              {item.position}
            </h4>
            <div className="row">
              {item.techused.map((tec, index) => (
                <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12">
                  <div key={index} className="tech-used-at-work">
                    <p>{tec.techname}</p>
                  </div>
                </div>
              ))}
            </div>
            <p>{item.des}</p>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </div>
  );
};

export default WorkExperience;
