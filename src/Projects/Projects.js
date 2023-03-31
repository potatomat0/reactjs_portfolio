import React from "react";
import "./projects.css";
import ProjectList from "./ProjectList";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Projects = () => {
  const projectList = [
    {
      name: "Trang web bán hàng Ecommerce",
      des: "Trang web bán hàng và giới thiệu sản phẩm thiết kế bằng wordpress, woocmmerce và elementor",

      techused: [
        {
          techname: "PHP 8",
        },
        {
          techname: "Wordpress",
        },
        {
          techname: "Woocommerce",
        },
        {
          techname: "Github",
        },
        {
          techname: "Elementor",
        },
      ],
      projectlink: "https://github.com/potatomat0/obsidianTemplate.app/",
    },
    {
      name: "MERN Stack Job Portal",
      des: "This project is to publish job for the employer and apply job for smployees",
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
        {
          techname: "Express js",
        },
        {
          techname: "Express js",
        },
      ],
      projectlink: "https://github.com/potatomat0/obsidianTemplate.app/",
    },   
    {
      name: "Template ghi chú và nhật ký cho Obsidian",
      des: "Là một lựa chọn thay thế cho notion và jira cho những ai muốn sử dụng native software",
      techused: [
        {
          techname: "Javascript",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Obsidian",
        },
        {
          techname: "Github",
        },
        {
          techname: "Obsidian Templater",
        },
      ],
      projectlink: "https://github.com/potatomat0/obsidianTemplate",
    },
    {
      name: "Template ghi chú và nhật ký cho Obsidian",
      des: "Là một lựa chọn thay thế cho notion và jira cho những ai muốn sử dụng native software",
      techused: [
        {
          techname: "Javascript",
        },
        {
          techname: "Typescript",
        },
        {
          techname: "Obsidian",
        },
        {
          techname: "Github",
        },
        {
          techname: "Obsidian Templater",
        },
      ],
      projectlink: "https://github.com/potatomat0/obsidianTemplate",
    },
    
  ];

  return (
    <div className="container" id="project">
      <div className="section-title">
        <Flip left>
          <h5>Projects</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {projectList.map((item, index) => (
          <Fade right>
            <div className="col-xl-6, col-lg-6, col-md-6, col-sm-6">
              <ProjectList key={index} {...item} index={index} />
            </div>
          </Fade>
        ))}
      </div>
    </div>
  );
};

export default Projects;
