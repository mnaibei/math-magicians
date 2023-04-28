import '../styles/navbarStyle.css';

const Navbar = () => (
  <div className="navbar">
    <h1>Math Magicians</h1>
    <ul className="nav">
      <li>
        <a href="/">Home</a>
      </li>
      <div className="border" />
      <li>
        <a href="/calculator">Calculator</a>
      </li>
      <div className="border" />
      <li>
        <a href="/quote">Quotes</a>
      </li>
    </ul>
  </div>
);

export default Navbar;
