import React from "react";
import "./install.css";
import Apple from "../../../assets/apple-removebg-preview.png";
import Android from "../../../assets/android-removebg-preview.png";
import App from "../../../assets/app-removebg-preview.png";

export default function install() {
  return (
    <div>
      <div className="container">
        <div className="install">
          <div className="installApplication">
            <div className="row">
              <div className="col-lg-6 col-md-6 col-sm-12 Left">
                <div className="download-contents">
                  <h4 className="Download-heading">
                    DOWNLOAD APP & <br />
                    GET THE VOUCHER
                  </h4>
                  <p className="Download-subHeading">
                    Lorem ipsum dolor sit amet consectetur, <br />
                    adipisicing elit. Accusantium, ullam.
                  </p>
                  <div className="image-cloumn1">
                    <img src={Apple} alt="..." className="Apple" />
                    <img src={Android} alt="..." className="Android" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-6 col-sm-12 Right">
                <div className="image-column2">
                  <img src={App} alt="..." />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
