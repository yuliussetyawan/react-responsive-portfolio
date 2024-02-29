import React from "react";
import Sidebar from "./Components/Sidebar/Sidebar";
import About from "./Components/About/About";
import TechStack from "./Components/TechStack/TechStack";

const App = () => {
  return (
    <div>
      <Sidebar />
      <About/>
      <TechStack/>
    </div>
  );
};

export default App;
