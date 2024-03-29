import React, { useState } from "react";
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
];

const colors = [
  "#F1C40F",
  "#4B088A",
  "#8181F7",
  "#FE2EF7",
  "#585858",
  "#800000",
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#001CCE",
  "#00C79F",
  "#FFBB24",
  "#FF1042",
  "#FF1042",
];

const TechStack = () => {
  const [showMoreTechStack, setShowMoreTechStack] = useState(9);
  const loadMore = () => {
    if (showMoreTechStack === data.length) {
      setShowMoreTechStack(9);
      return;
    }
    setShowMoreTechStack((prev) => prev + 3);
  };
  return (
    <div className="container tech-stack-section" id="techstack">
      <div className="section-title">
        <h5>Tech Stack</h5>
        <span className="line"></span>
      </div>
      <div className="row">
        {data.slice(0, showMoreTechStack).map((item, index) => (
          <div className="col-xl-4 col-lg-4 col-md-6 col-sm-12" key={item.id}>
            <div
              className={
                index === 0
                  ? "tech-content-marked tech-content"
                  : "tech-content"
              }
            >
              <span
                className="tech-number"
                style={{ backgroundColor: colors[index] }}
              >
                {index + 1}
              </span>
              <p>{item.name}</p>
            </div>
          </div>
        ))}
      </div>

      <span className="load-more-tech-stack" onClick={loadMore}>
        {showMoreTechStack === data.length ? "Show Less" : "Load More"}
      </span>
    </div>
  );
};

export default TechStack;
