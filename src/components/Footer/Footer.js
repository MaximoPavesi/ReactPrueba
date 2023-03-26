import React, { Component } from "react";
import "./Footer.scss";

class Footer extends Component {
  render() {
    return (
      <footer>
        <div className="social">
          <a
            className="social-github"
            href="https://github.com/MaximoPavesi"
            target="blank"
          >
            <GitHub
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
          <a
            className="social-linkedin"
            href="https://www.linkedin.com/in/maximopavesi/"
            target="blank"
          >
            <LinkedIn
              color="secondary"
              fontSize="large"
              className="social-icons"
            />
          </a>
        </div>

        <div className="copyright">
          © 2023 Copyright
          <a href="#" target="blank">
            {" "}
            Maximo Pavesi
          </a>
        </div>
      </footer>
    );
  }
}

export default Footer;