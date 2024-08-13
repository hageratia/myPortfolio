import React from "react";
import { useRef, useEffect, useState } from "react";
import { motion, useMotionValue } from "framer-motion";
import { clamp } from "@popmotion/popcorn";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism";
function useScrollConstraints(ref) {
  const [constraints, setConstraints] = useState({ top: 0, bottom: 0 });

  useEffect(() => {
    const element = ref.current;
    const viewportHeight = element.offsetHeight;
    const contentHeight = element.firstChild.offsetHeight;

    setConstraints({ top: viewportHeight - contentHeight, bottom: 0 });
  }, []);

  return constraints;
}

export default function Projects() {
  const images = {
    ecommerce: require("../../assets/projects/e-commerce.PNG"),
    ananasa: require("../../assets/projects/ananasa.PNG"),
    weather: require("../../assets/projects/weather-app.PNG"),
    login: require("../../assets/projects/login-sys.PNG"),
    games: require("../../assets/projects/Games.PNG"),
    quote: require("../../assets/projects/Quete.PNG"),
  };
  const exampleCodeEcommerce = `
const project = {
name: ' Ecommerce-FreshCart ' ,
tools: ['React.js' , 'JavaScript' , 'JSX' , 'CSS' 
, ' React-Bootstrap' , 'Redux toolkit' , 
'Json-Server' , 'API'],
myRole: Frontend Developer ,
Description: 'AboutAn Efficient E-commerce web 
application built with HTML, CSS, Bootstrap ,
Framework By React. '
GitHub Repo: https://github.com/hageratia/E-commerce-freshcart
`.trim();
  const exampleCodeAnanasa = `
const project = {
name: ' Food-Empire ' ,
tools: [ 'HTML , 'JavaScript' , 'CSS' 
],
myRole: Frontend Developer ,
Description: 'About
A Food-Empire web 
application built with HTML,
CSS, CRUD operation in JS
GitHub Repo: https://github.com/hageratia/Food-Empire
`.trim();
  const exampleCodeWeather = `
const project = {
name: ' Weather App ' ,
tools: [ 'HTML , 'JavaScript' , 'CSS' ,
'API' , 'Bootstrap' ],
myRole: Frontend Developer ,
Description: 'About
A Weather App web application 
to get weather for 3 days 
built with Html , CSS , Bootstrap5 ,
JavaScript, api
GitHub Repo: https://github.com/hageratia/Weather-App
`.trim();
  const exampleCodeLogin = `
const project = {
name: ' Login System ' ,
tools: [ 'HTML , 'JavaScript' , 'CSS' ,
'Bootstrap' ] ,
myRole: Frontend Developer ,
Description: 'About
A Login System web application  
built with Html , CSS , Bootstrap5 ,
JavaScript
GitHub Repo: https://github.com/hageratia/Login-System
`.trim();
  const exampleCodeGames = `
const project = {
name: ' games-review-api ' ,
tools: [ 'HTML , 'JavaScript' , 'CSS' ,
'Bootstrap' ] ,
myRole: Frontend Developer ,
Description: 'About
A Games Details web application  
built with Html , CSS , Bootstrap5 ,
JavaScript , Api
GitHub Repo: https://github.com/hageratia/Games
`.trim();
  const exampleCodeQuote = `
const project = {
name: ' Random Quotes ' ,
tools: [ 'HTML , 'JavaScript' , 'CSS' ,
'Bootstrap' ],
myRole: Frontend Developer ,
Description: 'About
A Random Quotes web application  
built with Html , CSS , Bootstrap5 ,
JavaScript
GitHub Repo: https://github.com/hageratia/Quotes
`.trim();
  const Projects = [
    { name: exampleCodeEcommerce, icon: images.ecommerce, title: "E-Commerce" },
    { name: exampleCodeAnanasa, icon: images.ananasa, title: "Food-Empire" },
    { name: exampleCodeGames, icon: images.games, title: "Games-API" },
    { name: exampleCodeWeather, icon: images.weather, title: "Weather-App" },
    { name: exampleCodeLogin, icon: images.login, title: "Login-System" },
    { name: exampleCodeQuote, icon: images.quote, title: "Quotes" },
  ];

  const y = useMotionValue(0);
  const ref = useRef(null);

  const { top, bottom } = useScrollConstraints(ref);

  function handleWheel(event) {
    event.preventDefault();
    const newY = y.get() - event.deltaY;
    const clampedY = clamp(top, bottom, newY);
    y.stop();
    y.set(clampedY);
  }
  return (
    <>
      <section className="projects mt-5 pt-5" id="projects">
        <div className="container">
          <div className="heading mt-5">
            <h1>Projects</h1>
          </div>
          <div class="wrapper-projects">
            <div className="containerrr" ref={ref} onWheel={handleWheel}>
              <motion.div
                drag="y"
                dragConstraints={{ top, bottom }}
                className="scrollable"
                style={{ y }}
              >
                {Projects.map((el, i) => {
                  return (
                    <div class="project-card object-card item">
                      <div class="linear-gradient"></div>
                      <div class="project-name">
                        <div class="bubbles">
                          <span class="bg-purple"></span>
                          <span class="bg-purple"></span>
                          <span class="bg-purple"></span>
                        </div>
                        <p>{el.title}</p>
                      </div>
                      <div class="wrapper-project">
                        <div class="row align-items-center">
                          <div class="col-lg-7 col-md-12 col-sm-12">
                            <SyntaxHighlighter
                              language="jsx"
                              style={nightOwl}
                              wrapLines={true}
                              customStyle={{
                                height: "320px",
                                borderRadius: "8px",
                                backgroundColor: "#14192D",
                                padding: "10px",
                              }}
                            >
                              {el.name}
                            </SyntaxHighlighter>
                          </div>
                          <div class="col-lg-5 col-md-12 col-sm-12">
                            <div class="img">
                              <img
                                src={el.icon}
                                alt={el.title}
                                className="w-100"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                })}
              </motion.div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
