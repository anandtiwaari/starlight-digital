import React from "react";
import blackImg from "./assets/black_bg.jpg";
// import AppleImg from "./assets/Apple_products_image.png";
import AppleImg from "./assets/Apple_vaala.png";
import StarLightLogo from "./assets/Logo_updated.png";
import contactImage from "./assets/contact_image.webp";
export const App = () => {
  return (
    <div>
      <div className="container">
        <img src={blackImg} alt="Snow" style={{ width: "100%" }} />
        <div
          className="bottom-left "
          style={{
            display: "flex",
            justifyContent: "start",
            textAlign: "left",
          }}
        >
          <div className="text-white" style={{ color: "white" }}>
            <div>
              <h2> Welcome to</h2>
            </div>
            <div>
              {" "}
              <h1 className="left_bottom_content_starlight">
                Starlight Digital LLP
              </h1>{" "}
            </div>
            <h4 style={{ marginTop: "2rem" }} className="left_bottom_content">
              Authorised DPP Partner of{" "}
              <h4 style={{ color: "rgb(128 155 255)", display: "inline" }}>
                Apple Products in India
              </h4>
            </h4>
          </div>
        </div>
        {/* <div className="top-left">Top Left</div> */}
        <div className="top-right" style={{ color: "white" }}>
          <div
            className="image_wrappere"
            style={{ width: "70%", margin: "auto", marginRight: "inherit" }}
          >
            <img
              src={StarLightLogo}
              alt=""
              style={{ width: "100%", height: "100%" }}
              className="Logo_web"
            />
          </div>
        </div>
        {/* <div className="bottom-right">Bottom Right</div> */}
        <div className="centered" style={{ color: "white" }}>
          <div
            className="image_wrapper"
            style={{ width: "100%", margin: "auto" }}
          >
            <img
              src={AppleImg}
              alt=""
              style={{ width: "100%", height: "100%" }}
            />
          </div>
        </div>
      </div>
      <div className="newdiv ">
        {/* <div className="back-action">
          <div className="item">
            <i className="fa fa-arrow-left"></i>
          </div>
        </div> */}
        <div className="profile-wrapper">
          <div className="profile-details">
            <div>
              <div className="profile-title">
                <h3 id="profile-name" className="profile-name">
                  Office Address
                </h3>
              </div>
              <ul>
                <li className="profile-number">
                  108, Dwarkesh Building, Near Handloom Corner, Main Road,
                  Surendranagar - 363001 Gujarat India
                </li>
                <li className="profile-number">
                  809, Sun Avenue Onc, Near Golden Tulip Bungalows, Ambawadi,
                  Ahmedabad - 380015 Gujarat India
                </li>
                <li className="profile-email">
                  <h3 className="cont_num">Contact No</h3>
                  <div className="support-contact">
                    <div id="profile-primary-email">
                      Support +91 94266 10045
                    </div>
                    <div id="profile-primary-email">
                      Support +91 87991 50045
                    </div>
                  </div>
                </li>
                {/* <li className="profile-email">
                  <div>Secondary Email</div>
                  <div id="profile-secondary-email">johndoe@johndoe.com</div>
                </li> */}
                <li className="profile-notes-copyright">
                  Copyright © 2023 Starlight Digital LLP - All Rights Reserved.
                </li>
              </ul>
            </div>
          </div>
          <div className="profile-picture">
            <img id="profile-picture" src={contactImage} />
          </div>
        </div>
        {/* <div className="contact-action">
          <div className="item">
            <i className="fa fa-wrench"></i>
          </div>
        </div> */}
      </div>
    </div>
  );
};
