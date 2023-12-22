import { Link } from "react-router-dom";

const Footer = () => {
    return (
      <div>
        <footer className="footer mt-32 p-10 bg-neutral text-neutral-content">
          <nav>
            <header className="footer-title">Services</header>
            <Link to={"addtask"} className="link link-hover">Add Task</Link>
            <Link to={"tasklist"} className="link link-hover">Task List</Link>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Social Media</header>
            <a className="link link-hover" href="https://github.com/MrATHARUDDIN" target="_blank" rel="noopener noreferrer">GitHub</a>
            <a className="link link-hover" href="https://www.linkedin.com/in/athar-uddin-892061292/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
            <a className="link link-hover" href="https://portfolio-athar1.web.app/" target="_blank" rel="noopener noreferrer">Portfolio</a>
          </nav>
        </footer>
      </div>
    );
  };
  
  export default Footer;
  