import { Link, useParams } from "react-router-dom";
import { useSelector } from "react-redux";

function BookDetails() {
  const { id } = useParams();

  const books = useSelector((state) => state.books);

  const book = books.find(
    (book) => book.id === Number(id)
  );

  if (!book) {
    return (
      <main className="container section">
        <h2>Book Not Found</h2>

        <Link to="/books">
          Back to Browse
        </Link>
      </main>
    );
  }

  return (
    <main className="container section">
      <div className="details-card">
        <div className="book-image large-image">
          📚
        </div>

        <div>
          <h2>{book.title}</h2>

          <p>
            <strong>Author:</strong> {book.author}
          </p>

          <p>
            <strong>Category:</strong> {book.category}
          </p>

          <p>
            <strong>Description:</strong>
          </p>

          <p>{book.description}</p>

          <p>
            <strong>Rating:</strong> ⭐ {book.rating}
          </p>

          <Link className="primary-button" to="/books">
            Back to Browse
          </Link>
        </div>
      </div>
    </main>
  );
}

export default BookDetails;