import { NavLink, Outlet } from "react-router-dom";
import { ArrowUpRight } from "lucide-react";

const links = [
  ["About", "/about"],
  ["Projects", "/projects"],
  ["Recognition", "/recognition"],
  ["Creative", "/creative"],
  ["Contact", "/contact"]
];

export default function Shell() {
  return (
    <>
      <header className="topbar">
        <NavLink to="/" className="wordmark">B<span>.</span></NavLink>
        <nav aria-label="Main navigation">
          {links.map(([label, path]) => (
            <NavLink key={path} to={path}>{label}</NavLink>
          ))}
        </nav>
        <NavLink to="/contact" className="contact-link">Get in touch <ArrowUpRight size={15} /></NavLink>
      </header>
      <Outlet />
      <footer className="footer">
        <span>© {new Date().getFullYear()} Bhavya</span>
        <span>Personal portfolio · Made with care</span>
        <a href="#top">Back to top ↑</a>
      </footer>
    </>
  );
}
