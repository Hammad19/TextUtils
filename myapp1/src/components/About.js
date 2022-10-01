import React from "react";
import "../index.css";

export default function About(props) {
  return (
    <div
      className={`about-section paddingTB60 ${
        props.mode === "light" ? "gray-bg" : "black-bg"
      }`}
    >
      <div className="container">
        <div className="row">
          <div className="col-md-7 col-sm-6">
            <div
              className={`${
                props.mode === "light" ? "about-title" : "about-title-dark"
              } clearfix`}
            >
              <h1>
                About <span>TextUtils</span>
              </h1>
              <h3>Manipulate Your Text in every Possible Way </h3>
              <p className="about-paddingB">
                We provide free tools to help you with your daily tasks. You
                will find tools for formatting source code, converters, tools
                for handling text, such as remove duplicate characters, empty
                lines, text sorter and many others. Check the current features
                below and feel free to recommend a new feature by contacting us.{" "}
              </p>
              <p>
                Text utils is app that can be use to help with counting text,
                formatting text and modify text.
              </p>
              <div className="about-icons">
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">
                      <i
                        id="social-fb"
                        className="fa fa-facebook-square fa-3x social"
                      ></i>
                    </a>{" "}
                  </li>
                  <li>
                    <a href="https://twitter.com/">
                      <i
                        id="social-tw"
                        className="fa fa-twitter-square fa-3x social"
                      ></i>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="https://plus.google.com/">
                      <i
                        id="social-gp"
                        className="fa fa-google-plus-square fa-3x social"
                      ></i>
                    </a>{" "}
                  </li>
                  <li>
                    {" "}
                    <a href="mailto:bootsnipp@gmail.com">
                      <i
                        id="social-em"
                        className="fa fa-envelope-square fa-3x social"
                      ></i>
                    </a>{" "}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-md-5 col-sm-6">
            <div className="about-img">
              <img
                src="https://devitems.com/preview/appmom/img/mobile/2.png"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
