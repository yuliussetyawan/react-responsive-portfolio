import React from "react";
import "./TechStack.css";

const data = [
  {
    id: 1,
    name: "Full Stack Developer",
  },
  { id: 2, name: "Node js" },
  {
    id: 3,
    name: "React js",
  },
  {
    id: 4,
    name: "Vue js",
  },
  {
    id: 5,
    name: "Express js",
  },
  {
    id: 6,
    name: "Vue js",
  },
  {
    id: 7,
    name: "Nuxt js",
  },
  {
    id: 8,
    name: "Angular js",
  },
  {
    id: 9,
    name: "Vanila js",
  },
  {
    id: 10,
    name: "Node js",
  },
  {
    id: 11,
    name: "Javascript",
  },
  {
    id: 12,
    name: "Typescript",
  },
  {
    id: 13,
    name: "Python",
  },
  {
    id: 14,
    name: "Django",
  },
  {
    id: 15,
    name: "UI/UX Design",
  },
];

const TechStack = () => {
  return (
    <div className="container tech-stack-section">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.map((item) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={item.id}>
            <div className="tech-content">
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechStack;
