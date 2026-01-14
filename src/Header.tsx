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
  <a href="https://www.instagram.com/vitoria_4ever/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn.simpleicons.org/instagram/FFFFFF"
      alt="Instagram"
      className="header-logo"
    />
  </a>

  <a href="https://github.com/vitoriaberdtt-boop" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn.simpleicons.org/github/FFFFFF"
      alt="GitHub"
      className="header-logo"
    />
  </a>

  <a href="https://www.linkedin.com/in/vitória-berdtt/" target="_blank" rel="noopener noreferrer">
    <img
      src="https://www.svgrepo.com/show/448234/linkedin.svg"
      alt="LinkedIn"
      className="header-logo linkedin-white"
    />
  </a>

   <a href="mailto:vitoria.berdtt@gmail.com" target="_blank" rel="noopener noreferrer">
    <img
      src="https://cdn.simpleicons.org/gmail/FFFFFF"
      alt="Email"
      className="header-logo"
    />
  </a>
</div>
      </div>
    </header>
  );
}

export default Header;
