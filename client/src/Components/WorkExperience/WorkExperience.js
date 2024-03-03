import React from "react";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';

const data = [
  {
    companyname: "Google",
    position: "Full Stack Developer",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    year: "2021-2022",
    techskills: [
      {
        techname: "Node JS",
      },
      {
        techname: "Express JS",
      },
      {
        techname: "React JS",
      },
      {
        techname: "Material UI",
      },
    ],
  },

  {
    companyname: "Facebook",
    position: "Full Stack Developer",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    year: "2020-2021",

    techskills: [
      {
        techname: "Node JS",
      },
      {
        techname: "Express JS",
      },
      {
        techname: "Vue JS",
      },
      {
        techname: "Material UI",
      },
    ],
  },

  {
    companyname: "Youtube",
    position: "Full Stack Developer",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    year: "2019-2020",

    techskills: [
      {
        techname: "Django",
      },
      {
        techname: "Express JS",
      },
      {
        techname: "Vue JS",
      },
      {
        techname: "Material UI",
      },
    ],
  },

  {
    companyname: "Microsoft",
    position: "Full Stack Developer",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    year: "2018-2019",

    techskills: [
      {
        techname: "Python",
      },
      {
        techname: "Express JS",
      },
      {
        techname: "Vue JS",
      },
      {
        techname: "Material UI",
      },
    ],
  },

  {
    companyname: "WhatsApp",
    position: "Full Stack Developer",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    year: "2017-2018",

    techskills: [
      {
        techname: "Typescript",
      },
      {
        techname: "Express JS",
      },
      {
        techname: "Next JS",
      },
      {
        techname: "Material UI",
      },
    ],
  },

  {
    companyname: "Instagram",
    position: "Full Stack Developer",
    des: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. ",
    year: "2016-2017",

    techskills: [
      {
        techname: "Javascript",
      },
      {
        techname: "Express JS",
      },
      {
        techname: "Next JS",
      },
      {
        techname: "Material UI",
      },
    ],
  },
];

const WorkExperience = () => {
  return (
    <div className="container">
      <div className="section-title">
        <h5>Work Experience</h5>
        <span className="line"></span>
      </div>
    </div>
  );
};

export default WorkExperience;
