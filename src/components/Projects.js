const Projects = () => {
    return (
        <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h3>Portfolio Projects</h3>
            <div className="github">
                <a href="https://github.com/jessicachiarella" target="_blank"
          ><img
            src="images/icons8-github-squared-100.png"
            alt="link to github"
        /></a></div>
            <div className="projectContainer">
            <div className="project" data-aos="zoom-in-up" data-aos-anchor-placement="top-center">
                <a href="https://full--bloom.herokuapp.com" className="projectLink" title="Full Bloom" target="_blank">
                    <div className="container">
                    <img className="thumbnail" src="images/Full_Bloom.png" alt="Full Bloom App"></img>
                    <div className="overlay">
                    <div className="text">Full Stack Developer: Full Bloom E-Commerce Platform</div>
                    </div></div>
                </a>
            </div>
            <div className="project" data-aos="zoom-in-up" data-aos-anchor-placement="top-center">
                <a href="https://fitness-track-er.herokuapp.com" className="projectLink" title="Fitness Tracker" target="_blank">
                    <div className="container">
                    <img className="thumbnail" src="images/Fitness_Tracker.png" alt="Fitness Tracker App"></img>
                    <div className="overlay">
                    <div className="text">Full Stack Developer: Fitness Tracker App</div>
                    </div></div>
                </a>
            </div>
        </div>
       
        </div>
    )
}
export default Projects;