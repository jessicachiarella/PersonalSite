import React from "react";

const AndAgain: React.FC = () => {
    return (
        <div
          className="project"
          data-aos="zoom-in-up"
          data-aos-anchor-placement="top-center"
        >
          <a
            href="http://www.amazon.com/Again-Novel-Jessica-Chiarella/dp/150111610X/ref=sr_1_2?ie=UTF8&qid=1440693788&sr=8-2&keywords=and+again"
            className="bookLink"
            title="And Again"
            target="_blank"
          >
            <div className="container">
              <img
                className="thumbnail"
                src="images/andagain.png"
                alt="And Again"
              ></img>
              <div className="overlay">
                <div className="text">
                  "Contemplative...Chiarella's entrancing prose and fully
                  fleshed characters should garner widespread, enthusiastic
                  praise." -Booklist
                </div>
              </div>
            </div>
          </a>
        </div>
    )
}
export default AndAgain