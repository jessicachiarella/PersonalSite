import React from "react";
import { Home, About, Projects, Publications } from "./components";

const App: React.FC = () => {
  return (
    <div>
      <Home />
      <About />
      <Projects />
      <Publications />
    </div>
  );
};
export default App;
