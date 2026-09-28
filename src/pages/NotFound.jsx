import { Link, useLocation } from "react-router-dom";

function NotFound() {
  const location = useLocation();

  return (
    <main className="not-found">
      <h1>404</h1>

      <h2>Page Not Found</h2>

      <p>
        The page you are looking for does not exist.
      </p>

      <p>
        Invalid URL: <strong>{location.pathname}</strong>
      </p>

      <Link className="primary-button" to="/">
        Back to Home
      </Link>
    </main>
  );
}

export default NotFound;