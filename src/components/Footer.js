import "../index.css";
const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" data-cy="footer">
      <ul>
        <li className="footerLinks">
          <a
            href="https://twitter.com/pandey_devesh_"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="twitterLink"
          >
            twitter
          </a>{" "}
          &bull;{" "}
          <a
            href="https://github.com/devesh-dkp"
            target="_blank"
            rel="noopener noreferrer"
            data-cy="githubLink"
          >
            github
          </a>
        </li>
        <li className="footerCopyrights">
          © Devesh Pandey {currentYear} &bull; All Rights Reserved
        </li>
      </ul>
    </footer>
  );
};

export default Footer;
