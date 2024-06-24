const Footer = () => {
  return (
    <footer>
      <section className="footer-section">
        <ul className="footer-links">
          <li>
              <a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
                <span className="icon icon-linkedin" aria-label="linkedin profile link"></span>
              </a>
          </li>
          <li>
              <a href="https://github.com/BenRavandi/" target="_blank" rel="noreferrer">
                <span className="icon icon-github" aria-label="github profile link"></span>
              </a>
          </li>
          <li>
              <a href="https://leetcode.com/u/BenRavandi/" target="_blank" rel="noreferrer">
                <span className="icon icon-leetcode" aria-label="leetcode profile link"></span>
              </a>
          </li>
        </ul>
        <p>Made by Ben Ravandi</p>
      </section>
    </footer>
  )
}

export default Footer;
