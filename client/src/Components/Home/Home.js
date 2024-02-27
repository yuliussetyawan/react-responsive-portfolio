import React from "react";
import "./Home.css";
import Typewriter from "typewriter-effect";

const Home = () => {
  return (
    <div className="container-fluid home">
      <div className="container home-content">
        <h1>Hi I'm Yulius</h1>
        <h3>
          <Typewriter
            options={{
              strings: [
                "Full Stack Web Developer",
                "MERN Stack Developer",
                "UI/UX Designer",
              ],
              autoStart: true,
              loop: true,
              delay: 5,
            }}
          />
        </h3>
      </div>
    </div>
  );
};

export default Home;
