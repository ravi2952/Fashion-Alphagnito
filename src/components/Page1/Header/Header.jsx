import React from "react";
import "./Header.css";
import Marquee from "react-fast-marquee";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="container-fluid">
          <Marquee play={true} pauseOnHover={true} speed={200} loop={0}>
            <p>
              Lets Explore <span className="Unique-text"> UNIQYE </span> Fashion
              Everyday
            </p>
          </Marquee>
        </div>
      </div>
    </div>
  );
}
