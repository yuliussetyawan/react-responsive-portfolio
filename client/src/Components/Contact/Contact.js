import React from "react";
import "./Contact.css";
const Contact = () => {
  return (
    <div className="container contact-section">
      <div className="row">
        <div className="col-xl-5 col-lg-5 col-md-5 col-sm-5">
          <div className="contact-form-image">
            <img
              src="https://images.pexels.com/photos/4348403/pexels-photo-4348403.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="contact-form "
            />
          </div>
        </div>

        <div className="col-xl-7 col-lg-7 col-md-7 col-sm-7">
          <div className="contact-form-design">
            <div className="text-center">
              <h5>Contact Me</h5>
            </div>
            <form>
              <div className="contact-form">
                <label className="form-label">Name</label>
                <input type="text" className="form-control" />
              </div>

              <div className="contact-form">
                <label className="form-label">E-mail</label>
                <input type="text" className="form-control" />
              </div>

              <div className="contact-form">
                <label className="form-label">Job Types</label>
                <select className="custom-select-tag">
                  <option>Full-time</option>
                  <option>Working Student</option>
                  <option>Part-time</option>
                  <option>Contract</option>
                </select>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
