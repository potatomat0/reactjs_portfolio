import React, { useState } from "react";
import "./TechStack.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const TechStack = () => {
  const data = [
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Full stack software developer",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 1,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Tester",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 2,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Product Manager",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 3,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Backend Engineer",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 4,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Microservice Engineer ",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 5,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Data Scientist",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 6,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Full stack developer",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 7,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Graphic Designer",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 8,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Product Owner",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 9,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "SEO manager",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 10,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Full stack software developer",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 11,
    },
    {
      content:
        "Chủ Nghĩa Xã Hội là phong trào thực tiễn, phong trào đấu tranh của nhân dân lao động",
      name: "Nguyễn Văn A",
      position: "Front-end developer",
      img: "https://th.bing.com/th/id/R.f0990e7eaeb90530acf7a803b067929f?rik=uzRVvW4GPKkR%2fw&pid=ImgRaw&r=0",
      id: 12,
    },
    
  ];

  const [visible, setVisible] = useState(9);

  const loadMore = () => {
    setVisible((prev) => prev + 3);
  };

  const colors = [
    "#0088FE",
    "#00C49F",
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
    <div className="container techstack-section" id="techstack">
      <div className="section-title">
        <Flip left>
          <h5>Kỹ năng</h5>
          <span className="line"></span>
        </Flip>
      </div>
      <div className="row">
        {data.slice(0, visible).map((item, index) => (
          <Fade right>
            <div className="col-lg-4 col-md-6 col-xl-4" key={item.id}>
              <div className={index === 0 ? "tech-content-with-marked" : "tech-content"}>
                <span
                  className="service-number"
                  style={{ backgroundColor: colors[index] }}
                >
                 {index + 1}
                </span>

                <p>{item.position}</p>
              </div>
            </div>
          </Fade>
        ))}
      </div>

      {visible >= data.length ? null : (
        
          <span className="load-teach-stack-button" onClick={loadMore}>
            Hiển thị thêm
          </span>
   
        )}
    </div>
  );
};

export default TechStack;
