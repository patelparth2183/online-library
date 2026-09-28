import { Link } from "react-router-dom";

function Header() {
  return (
    <header className="header">
      <div className="container header-content">
        <h1 className="logo">My Library</h1>

        <nav>
          <Link to="/">Home</Link>
          <Link to="/books">Browse Books</Link>
          <Link to="/add-book">Add Book</Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;