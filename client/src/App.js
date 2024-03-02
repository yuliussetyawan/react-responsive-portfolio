import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";
import Project from "./Components/Projects/Project";

const App = () => {
  return (
    <div>
      <Sidebar />
      <About />
      <TechStack />
      <Project />
    </div>
  );
};

export default App;
