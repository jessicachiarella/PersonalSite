import React from "react";

const About: React.FC = () => {
  return (
    <div className="aboutContainer">
      <div data-aos="fade-up" data-aos-anchor-placement="top-center">
        <h3>About Me</h3>
      </div>
      <p data-aos="fade-up" data-aos-anchor-placement="top-center">
        I'm Jessica, a software engineer and creative professional from Chicago,
        IL. I'm the author of two novels via major publishers and got my start
        in software engineering in a fullstack web development bootcamp in the
        summer of 2022.
      </p>

      <p data-aos="fade-up" data-aos-anchor-placement="top-center">
        When I enrolled in bootcamp, I was elated to discover that many of the
        skills I draw upon in novel writing — the capacity to organize large
        systems into smaller components, employ both creativity and logic in
        problem solving, be exacting when it comes to detail, and always have an
        eye toward the consumer experience — transferred beautifully to sofware
        engineering.{" "}
      </p>

      <p data-aos="fade-up" data-aos-anchor-placement="top-center">
        Now I understand that my experience as a writer sets me apart in the
        world of tech. I'm know how to approach problems from unexpected angles,
        to think creatively about solutions, and to question whether the
        well-trod path is necessarily the correct one.{" "}
      </p>

      <div
        className="techStack"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h4>Tech Stack:</h4>
        <p>
          JavaScript/TypeScript, Python, Git, Node, SQL, Postgres, FastAPI,
          Jest, Pytest, Redis, Prisma, Surge, Kubernetes, Docker, New Relic,
          React, NextJS
        </p>
      </div>
      <div
        className="Education"
        data-aos="fade-up"
        data-aos-anchor-placement="top-center"
      >
        <h4>Education:</h4>
        <p>
          University of Illinois, Chicago/Fullstack Academy Web Development
          Bootcamp Graduate, August 2022
        </p>
        <p>University of California, Riverside, MFA in Creative Writing 2016</p>
        <p>
          DePaul University, BA in Political Science, summa cum laude 2009, MA
          in Writing and Publishing 2014
        </p>
      </div>
    </div>
  );
};
export default About;
