import React from "react";
import AndAgain from "./AndAgain";
import LostGirls from "./LostGirls";

const Publications: React.FC = () => {
  return (
    <div data-aos="fade-up" data-aos-anchor-placement="top-center">
      <h3>Publications</h3>
      <div className="publicationContainer">
        <AndAgain/>
        <LostGirls/>
      </div>
    </div>
  );
};
export default Publications;
