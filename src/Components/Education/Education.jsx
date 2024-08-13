import React, { useEffect, useState } from "react";
import Lottie from "react-lottie-player";
const LottieAnimation = () => {
  const [animationData, setAnimationData] = useState(null);

  useEffect(() => {
    // Fetch the animation data
    const fetchAnimationData = async () => {
      try {
        const response = await fetch(
          "https://lottie.host/21552016-1a16-4dbb-a1fa-2ad78f700999/Dgcu6nWlmI.json"
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
export default function Education() {
  return (
    <>
      <section className="education" id="education">
        <div className="container">
          <div className="heading">
            <h1>Educations</h1>
          </div>
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="">
                <LottieAnimation />
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12">
              <div className="wrapper-cards">
                <div className="card-education">
                  <div className="wrapper-card">
                    <div className="education-duration">
                      <p>October 2023 - February 2024</p>
                    </div>
                    <div className="education-details">
                      <div className="education-icon">
                        <i className="fa-solid fa-address-card"></i>
                      </div>
                      <div className="education-info">
                        <p className="education-degree">
                          Diploma, Front End Developer
                        </p>
                        <p>Route Academy</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card-education">
                  <div className="wrapper-card">
                    <div className="education-duration">
                      <p>2018 – 2023</p>
                    </div>
                    <div className="education-details">
                      <div className="education-icon">
                        <i className="fa-solid fa-address-card"></i>
                      </div>
                      <div className="education-info">
                        <p className="education-degree">
                          Faculty Of Engineering, Department Of Comminucation
                          and Electronics
                        </p>
                        <p>Mansoura College Academy</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
