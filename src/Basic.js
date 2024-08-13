import React from "react";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { nightOwl } from "react-syntax-highlighter/dist/esm/styles/prism"; // استيراد النمط nightOwl

const exampleCode = `
const frontendDeveloper = {
name: ' Hager ' ,
title: ' Frontend Developer ' ,
skills: ['HTML' , 'CSS' , 'Bootstrap' , 'Javascript' , 'jQuery' , 'SASS' , 'React' , 'React Router Dom' , 'Redux'],
tools: ['GitHub' , 'Git' , 'NPM' , 'Postman'],
hardWorker: true ,
quickLearner: true ,
problemSolver: true ,
employable: function () {
return (
this.hardWorker &&
this.problemSolver &&
this.skills.length >= 5
)}};
`.trim();

const Basic = () => (
  <SyntaxHighlighter language="jsx" style={nightOwl}>
    {exampleCode}
  </SyntaxHighlighter>
);

export default Basic;
