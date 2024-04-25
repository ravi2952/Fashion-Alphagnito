import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaGoogle } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";


export default function Footer() {
  return (
    <div>
      <div className="footer">
        <div className="container-fluid">
          <div className="fsooter-component container">
            <div className="row">
              <div className="col-lg-8 col-md-6 col-sm-12">
                <div className="footer-left-side-cloumn">
                  <div className="footer-heading">
                    <h3>
                      THE BEST PLACE <br />
                      FOR IMPATIENT <br />
                      BRANDS
                    </h3>
                  </div>
                  <div className="footer-sub-texts">
                    <p>LOREM</p>
                    <p>
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Doloribus provident, atque minima sit reprehenderit
                      ducimus maxime magni totam tempore dolor?
                    </p>
                    <p>LOREM</p>
                  </div>
                </div>
              </div>
              <div className="col-lg-4 col-md-6 col-sm-12">
                <div className="footer-right-side-column">
                  <div className="footer-apps">
                    <a href="/">Android</a>
                    <a href="/">IOS</a>
                    <a href="/">Windows</a>
                    <a href="/">mac</a>
                  </div>
                  <div className="footer-products">
                    <>
                      <a href="/">Products</a>
                    </>
                    <>
                      <a href="/">Caroesal</a>
                    </>
                    <>
                      <a href="/">Offers</a>
                    </>
                    <>
                      <a href="/">Contact us</a>
                    </>
                    <>
                      <a href="/">About us</a>
                    </>
                    <>
                      <a href="/">Download App</a>
                    </>
                    <>
                      <a href="/">Fashion</a>
                    </>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="footer-icons">
            <FaInstagram style={{color:'#fff', width: '25px', marginLeft:'20px'}}/>
            <FaWhatsapp style={{color:'#fff', width: '25px', marginLeft:'20px'}}/>
            <FaGoogle style={{color:'#fff', width: '25px', marginLeft:'20px'}}/>
            <FaYoutube style={{color:'#fff', width: '25px', marginLeft:'20px'}}/>
            <FaTwitterSquare style={{color:'#fff', width: '25px', marginLeft:'20px'}}/>
            <FaFacebook style={{color:'#fff', width: '25px', marginLeft:'20px'}}/>
          </div>
        </div>
      </div>
    </div>
  );
}
