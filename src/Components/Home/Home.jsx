import React from "react";
import Basic from "../../Basic";
import myPic from "../../assets/IMG_6322_copy-modified-modified-removebg.png";
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <>
      <section className="landing mb-5">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="intro">
                <div className="image">
                  <Link href="/">
                    <img src={myPic} className="my-img" alt="" />
                  </Link>
                </div>
                <div className="text">
                  <h1>Welcome,</h1>
                  <p>
                    I'm <span>Hager Atia</span>, <br /> a
                    <span> Frontend Developer</span>
                  </p>
                </div>
                <div className="icons">
                  <a
                    className="text text-decoration-none"
                    href="https://www.linkedin.com/in/hager-atia-9a5423245"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-linkedin"></i>
                  </a>
                  <a
                    className="text text-decoration-none"
                    href="https://github.com/hageratia"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-github"></i>
                  </a>
                  <a
                    className="text text-decoration-none"
                    href="https://www.facebook.com/HagerAtia4?mibextid=ZbWKwL"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fa-brands fa-facebook"></i>
                  </a>
                </div>
                <div className="buttons">
                  <button>
                    <a className="text text-decoration-none" href="#Contact">
                      CONTACT ME
                      <i className="fa-regular fa-id-card"></i>
                    </a>
                  </button>
                  <button>
                    <a
                      className="text text-decoration-none"
                      href="https://drive.google.com/file/d/1Ld-SoSqjXSFMLKjp8lvaRpu9sNj2j6GD/view?usp=drivesdk"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      GET RESUME
                      <i className="fa-solid fa-circle-arrow-down"></i>
                    </a>
                  </button>
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div class="card-skills object-card">
                <div class="bubbles">
                  <span class="bg-purple"></span>
                  <span class="bg-purple"></span>
                  <span class="bg-purple"></span>
                </div>{" "}
                <Basic />
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
