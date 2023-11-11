import React from "react";
import blackImg from "./assets/black_bg.jpg";
import bgWhiteImg from "../src/assets/bg-white.jpg";
// import AppleImg from "./assets/Apple_products_image.png";
import AppleImg from "./assets/Macbook_image_up.png";
import StarLightLogo from "./assets/Logo_updated.png";
import Logo_upper from "./assets/Logo_upper_updated.png";
import contactImage from "./assets/contact_image.webp";
import whatSappIcon from "../src/assets/WhatsApp_icon.png";

export const App = () => {
  return (
    <div>
      <div className="container">
        <img src={bgWhiteImg} alt="Snow" style={{ width: "100%" }} />
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
              <h2 className="welcome_two"> Welcome to</h2>
            </div>
            <div>
              {" "}
              <h1 className="left_bottom_content_starlight">
                Starlight Digital LLP
              </h1>{" "}
            </div>
            <h4 style={{ marginTop: "1.5rem" }} className="left_bottom_content">
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
              src={Logo_upper}
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
      <div>
        <h1 className="contact_info">Contact Information</h1>
        <div className="section_two">
          <div className="info-contact">
            <div>
              <div>
                <h3 className="office_addr">Office Address</h3>
              </div>
              <ul>
                <div className="address_wrapper">
                  <li className="office_address">
                    108, Dwarkesh Building, Near Handloom Corner, Main Road,
                    Surendranagar - 363001 Gujarat India
                  </li>
                  <li className="office_address">
                    809, Sun Avenue Onc, Near Golden Tulip Bungalows, Ambawadi,
                    Ahmedabad - 380015 Gujarat India
                  </li>
                </div>
                <li style={{ listStyle: "none" }}>
                  <h3 className="contact_num">Contact No</h3>
                  <div className="profile-primary-email">
                    <div id="profile-primary-email">
                      Support +91 94266 10045
                    </div>
                    <div id="profile-primary-email">
                      Support +91 87991 50045
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="image-width">
            <img src={contactImage} />
          </div>
        </div>
        {/* <div className="contact-action">
          <div className="item">
            <i className="fa fa-wrench"></i>
          </div>
        </div> */}
      </div>
      <li className="profile-notes-copyright">
        Copyright © 2023 Starlight Digital LLP - All Rights Reserved.
      </li>
      <div class="chat-button-container">
        <button class="chat-button">
          {" "}
          <a href="https://wa.me/+918799150045?text=Hello%20there!">
            <img src={whatSappIcon} alt="" style={{ width: "55px" }} />
          </a>
        </button>
      </div>
    </div>
  );
};
