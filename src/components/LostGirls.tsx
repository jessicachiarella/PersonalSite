import React from "react";

const LostGirls: React.FC = () => {
    return (
        <div
          className="project"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="top-center"
        >
          <a
            href="https://www.penguinrandomhouse.com/books/652881/the-lost-girls-by-jessica-chiarella/"
            className="bookLink"
            title="The Lost Girls"
            target="_blank"
          >
            <div className="container">
              <img
                className="thumbnail"
                src="images/LostGirls.png"
                alt="The Lost Girls"
              ></img>
              <div className="overlay">
                <div className="text">
                  “Elegantly written…The book begins at a leisurely pace, all
                  dark mood and dark character, and then accelerates at a
                  dizzying rate” -The New York Times Book Review
                </div>
              </div>
            </div>
          </a>
        </div>
    )
}
export default LostGirls