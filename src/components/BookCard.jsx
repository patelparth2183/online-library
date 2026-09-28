import { Link } from "react-router-dom";

function BookCard({ book }) {
  return (
    <div className="book-card">
      <div className="book-image">
        <span>📚</span>
      </div>

      <div className="book-content">
        <h3>{book.title}</h3>

        <p className="author">By {book.author}</p>

        <p>
          <strong>Category:</strong> {book.category}
        </p>

        <p>
          <strong>Rating:</strong> ⭐ {book.rating}
        </p>

        <Link className="details-button" to={`/book/${book.id}`}>
          View Details
        </Link>
      </div>
    </div>
  );
}

export default BookCard;