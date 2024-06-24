import resume from "../../assets/resume/BenRavandiResume.pdf";

const Resume = () => {
  return (
    <>
      <h1>Resume</h1>
      <section className="resume content">
          <p>Download my
            <a href={resume} download> resume
              <span className="icon icon-download" aria-label="download icon"></span>
            </a>
          </p>
          <section className="proficiencies">
            <div className="frontEnd">
              <h2>Front-end Proficiencies</h2>
              <ul>
                <li>HTML</li>
                <li>CSS</li>
                <li>Javascript</li>
                <li>jQuery</li>
                <li>React</li>
                <li>Bootstrap</li>
                <li>Client-side APIs</li>
                <li>Resposive Design</li>
                <li>Accessibilty</li>
              </ul>
            </div>
            <div className="backEnd">
              <h2>Back-end Proficiencies</h2>
              <ul>
                <li>Server-side APIs</li>
                <li>REST API</li>
                <li>Node</li>
                <li>Express</li>
                <li>MySQL</li>
                <li>Sequelize</li>
                <li>MongoDB</li>
                <li>Mongoose</li>
                <li>GraphQL</li>
              </ul>
            </div>
          </section>
      </section>
    </>
  )
}

export default Resume;
