import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Skills() {
  const images = {
    html: require("../../assets/skills/html.png"),
    css: require("../../assets/skills/css.png"),
    git: require("../../assets/skills/git.png"),
    gitHub: require("../../assets/skills/github.png"),
    jQuery: require("../../assets/skills/jQuery.png"),
    react: require("../../assets/skills/react.png"),
    redux: require("../../assets/skills/redux.png"),
    reactRouter: require("../../assets/skills/react-router.png"),
    js: require("../../assets/skills/js.png"),
    postman: require("../../assets/skills/postman.png"),
    npm: require("../../assets/skills/npm.png"),
    sass: require("../../assets/skills/sass.png"),
    bootstrap: require("../../assets/skills/bootstrap.png"),
    webpack: require("../../assets/skills/webpack.png"),
  };
  const skills = [
    { name: "HTML", icon: images.html },
    { name: "CSS", icon: images.css },
    { name: "Bootstrap", icon: images.bootstrap },
    { name: "JS", icon: images.js },
    { name: "jQuery", icon: images.jQuery },
    { name: "Git", icon: images.git },
    { name: "Github", icon: images.gitHub },
    { name: "Sass", icon: images.sass },
    { name: "React", icon: images.react },
    { name: "react-router", icon: images.reactRouter },
    { name: "Postman", icon: images.postman },
    { name: "Redux", icon: images.redux },
    { name: "npm", icon: images.npm },
    { name: "Webpack", icon: images.webpack },
  ];
  let settings = {
    dots: false,
    infinite: true,
    speed: 2000,
    slidesToShow: 6,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 1000, // سرعة التشغيل التلقائي
    cssEase: "ease-in-out", // نوع الانتقال السلس
    arrows: false,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: false,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          initialSlide: 1,
        },
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
      {
        breakpoint: 200,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };
  return (
    <>
      <section className="skills mt-5 pt-5" id="skills">
        <div className="container">
          <div className="heading mt-5">
            <h1>Skills</h1>
          </div>
          <div class="skills-slider">
            <div class="wrapper-skills">
              <Slider {...settings}>
                {skills.map((el, i) => {
                  return (
                    <div key={i} className="skill">
                      <div className="img d-flex justify-content-center align-items-center">
                        <img
                          src={el.icon}
                          alt={el.name}
                          className="cursor-pointer "
                        />
                      </div>
                      <div className="name-skill pb-3">
                        <p className=" text-center">{el.name}</p>
                      </div>
                    </div>
                  );
                })}
              </Slider>
            </div>
          </div>
        </div>
      </section>
      <div className="line"></div>
    </>
  );
}
