import React from "react";
import "./feedback.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Fade from "react-reveal/Fade";
import Flip from "react-reveal/Flip";
const Feedback = () => {
  const data = [
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },
    {
      img: "https://th.bing.com/th/id/OIP.8-szckUUEQqlyw1MRGqKJQHaHj?pid=ImgDet&rs=1",

      content:
        "Thằng nhật này học khá ổn, hãy thuê nó!",
      name: "Nguyễn Văn A",
      position: "Giáo viên",
    },

    
  ];

  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    adaptiveHeight: true,
    initialSlide: 0,
    autoplay: true,
    rows: 1,
    slidesPerRow: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className="container feedback-slider" id="testimonial">
      
     <div className="section-title">
        <Flip left>
          <h5>Testimonial</h5>
          <span className="line"></span>
        </Flip>
      </div>

      <div className="feedbck-slide">
        <Slider {...settings}>
          {data.map((item, index) => (
            <Fade left>
              <div className="col-xl-12 col-lg-12 col-md-12 col-sm-12">
                <div className="card content-slider" key={index}>
                  <img
                    src={item.img}
                    alt="slider image"
                    className="center-image"
                  />
                  <p>{item.content}</p>
                  <h4>{item.name}</h4>
                  <p>{item.position}</p>
                </div>
              </div>
            </Fade>
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Feedback;
