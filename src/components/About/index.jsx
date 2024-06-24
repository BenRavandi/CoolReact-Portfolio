import headshot from "../../assets/images/ben-r-square.jpg"

const About = () => {
  return (
    <section className="content" id="about">  
      <h1>About Me</h1>
      <div className="about-me">
        <div>
          <p>Hi, I'm Ben.</p>
          <p> 
            I am a detail oriented full-stack developer with experience in responsive web design and development, web accessibility, digital activation, project management and design experimentation. 
          </p>
          {/* <hr /> */}
          <p>
            I completed a Full-Stack Web Development Bootcamp through The Ohio State of University, July 2024.  
          </p>
        </div>
        <img src={headshot} alt="headshot of Ben Ravandi" />
      </div>
    </section>
  )
}

export default About;
