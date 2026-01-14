type Props = {
  title: string;
}

function Header(props: Props) {
  return (
    <header>
      <div className="header-container">
        <h3 className="header-title">
            {props.title}
        </h3>

        <div className="header-logos">
          <a href="https://github.com/vitoriaberdtt-boop" target="_blank">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="GitHub"
              className="header-logo"
            />
          </a>

          <a href="https://www.linkedin.com/in/vitória-berdtt/" target="_blank" rel="noopener noreferrer">
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="header-logo"
            />
          </a>
        </div>
      </div>
    </header>
  );
}

export default Header;
