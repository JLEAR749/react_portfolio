import React from "react";
import Project from "../Project";

const projects = [
  {
    id:0,
    title:'',
    languages:'',
    image:'',
    description:'',
    repo:'',
    live:'',
  },
];

const Portfolio = () => {
  return (
  <div>
    <p className="content">Portfolio</p>
    <Project projects={projects}/>
  </div>

  );
}

export default Portfolio;