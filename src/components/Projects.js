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
                    <div className="text">Full Bloom: E-commerce site specializing in houseplants and clay pots, created using PERN stack in collaboration with three other developers. Logged-in or guest users can view products, add them to a cart, edit and check out that cart, and logged-in users can view order history.</div>
                    </div></div>
                </a>
            </div>
            <div className="project" data-aos="zoom-in-up" data-aos-anchor-placement="top-center">
                <a href="https://fitness-track-er.herokuapp.com" className="projectLink" title="Fitness Tracker" target="_blank">
                    <div className="container">
                    <img className="thumbnail" src="images/Fitness_Tracker.png" alt="Fitness Tracker App"></img>
                    <div className="overlay">
                    <div className="text">Fitness Tracker: Front end portion of project employing ReactJS components and hooks to fetch and display data from an external API to create a fitness-tracking app. Users can build, edit, and delete fitness routines involved an extensive array of related activities. Guest users can view a list of public routines and all related activities.</div>
                    </div></div>
                </a>
            </div>
        </div>
       
        </div>
    )
}
export default Projects;