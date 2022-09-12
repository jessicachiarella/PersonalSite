const About = () => {
    return (
        <div className="aboutContainer">
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h3>About Me</h3>
            </div>
            <div data-aos="fade-up" data-aos-anchor-placement="top-center">
            <p>I'm Jessica, a web developer and creative professional from Chicago, Illinois. If I'm not writing code, I'm probably out walking my dog or working on a novel!</p>
            </div>
            <div className="techStack" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h4>Tech Stack:</h4>
            <p>JavaScript, React PostgreSQL, Node, Express, HTML, CSS, Github, Heroku, Netlify, Webpack, Axios</p>
            </div>
            <div className="Education" data-aos="fade-up" data-aos-anchor-placement="top-center">
            <h4>Education:</h4>
            <p>University of Illinois, Chicago/Fullstack Academy Web Development Bootcamp Graduate, August 2022</p>
            <p>University of California, Riverside, MFA in Creative Writing 2016</p>
            <p>DePaul University, BA in Political Science, summa cum laude 2009, MA in Writing and Publishing 2014</p>
            </div>
        </div>
    )
}
export default About;