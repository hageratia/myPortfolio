// about.jsx
import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";

const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/219421be-1ce5-4f70-89a7-76b77621fd25/6hhOthKOTj.json"
        );
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        const data = await response.json();
        setAnimationData(data);
      } catch (error) {
        console.error("Error fetching animation data:", error);
      }
    };

    fetchAnimationData();
  }, []);

  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Lottie
        loop
        animationData={animationData}
        play
        style={{ width: "100%", height: "100%" }}
      />
    </div>
  );
};

export default function About() {
  return (
    <>
      <section className="about mt-5 pt-5" id="About">
        <div className="container">
          <div className="heading mt-5">
            <h1>About Me</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="card-me">
                <h2>About Me</h2>
                <p>
                  My name is Hager, and I am passionate about front-end
                  development. My journey began with my Bachelor's degree in
                  Comminucations and Electronics Engineering, I am eager to
                  apply my skills and knowledge to a software development.
                  Throughout my academic career, I have honed my problem-solving
                  skills. I am excited about the opportunity to work in a
                  collaborative team environment where I can contribute to the
                  success of a reputable software company while advancing my
                  career as a frontend developer.
                </p>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div>
                <LottieAnimation />
              </div>
            </div>
          </div>
        </div>
      </section>
      <div class="line"></div>
    </>
  );
}
