import React from "react";
import "./contact.css";
import { IoIosSend } from "react-icons/io";
import Fade from "react-reveal/Fade";
import emailjs from 'emailjs-com';
import { useState } from 'react';
// https://stackoverflow.com/questions/65602457/typeerror-react-webpack-imported-module-1-default-is-not-a-function-or-its-r
import SweetAlert2 from 'react-sweetalert2';
const Contact = () => {

  const [swalProps, setSwalProps] = useState({});

  function sendEmail(e) {
    e.preventDefault();    //This is important, i'm not sure why, but the email won't send without it

    emailjs.sendForm('service_vradpue', 'template_pneq45i', e.target, '3ulsLOZQWXzO2RJDR')
      .then((result) => {
          window.location.reload()  //This is if you still want the page to reload (since e.preventDefault() cancelled that behavior) 
      }, (error) => {
          console.log(error.text);
      });
  }



  return (
    <div className="container contact-section" id="contact">
      <div className="row">
        <Fade bottom>
          <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
            <div className="image-class">
              <img src="https://images.pexels.com/photos/821754/pexels-photo-821754.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
          </div>
        </Fade>

        <Fade right>
          <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
            <div className="contact-form-design">
              <div className="text-center">
                <h5>Đơn liên lạc</h5>
              </div>
              <form onSubmit={sendEmail}>
                <div className="contact-form">
                  <label className="form-lebel">Tên</label>
                  <input type="text" name="from_name" className="form-control" />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Email</label>
                  <input type="email" name="from_email" className="form-control" />
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Loại công việc</label>
                  <select name="form_job" className="custom-select">
                    <option>Full-time</option>
                    <option>Thực tập</option>
                    <option>Làm thêm</option>
                    <option>Làm hợp đồng</option>
                  </select>
                </div>

                <div className="contact-form">
                  <label className="form-lebel">Nội dung mail</label>
                  <textarea name="html_message"
                    type="text"
                    maxLength="500"
                    className="form-control"
                    rows="4"
                  />
                </div>

                <div className="button-submit">
                  <button
                   onClick={() => {
                    setSwalProps({show: true,title: 'Thành công',text: 'Đã gửi mail thành công 😀',});}}   
                   type="submit">Gửi <IoIosSend size={20} /></button>
                   <SweetAlert2 {...swalProps} />
                </div>
              </form>
            </div>
          </div>
        </Fade>
      </div>
    </div>
  );
};

export default Contact;
