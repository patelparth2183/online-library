import { useMemo, useState } from "react";
import { useSelector } from "react-redux";
import { Link, useParams } from "react-router-dom";

import BookCard from "../components/BookCard";

function BrowseBooks() {
  const books = useSelector((state) => state.books);

  const { category } = useParams();

  const [searchTerm, setSearchTerm] = useState("");

  const decodedCategory = category
    ? decodeURIComponent(category)
    : null;

  const filteredBooks = useMemo(() => {
    let result = books;

    // Filter by category
    if (decodedCategory) {
      result = result.filter(
        (book) =>
          book.category.toLowerCase() ===
          decodedCategory.toLowerCase()
      );
    }

    // Filter by title or author
    if (searchTerm.trim() !== "") {
      result = result.filter(
        (book) =>
          book.title
            .toLowerCase()
            .includes(searchTerm.toLowerCase()) ||
          book.author
            .toLowerCase()
            .includes(searchTerm.toLowerCase())
      );
    }

    return result;
  }, [books, decodedCategory, searchTerm]);

  return (
    <main className="container section">
      <div className="page-heading">
        <h2>Browse Books</h2>

        {decodedCategory && (
          <Link to="/books">Show All Books</Link>
        )}
      </div>

      <input
        type="text"
        placeholder="Search by book title or author..."
        value={searchTerm}
        onChange={(event) => setSearchTerm(event.target.value)}
        className="search-input"
      />

      {decodedCategory && (
        <h3 className="filter-title">
          Category: {decodedCategory}
        </h3>
      )}

      {filteredBooks.length > 0 ? (
        <div className="book-grid">
          {filteredBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      ) : (
        <p className="no-books">
          No books found.
        </p>
      )}
    </main>
  );
}

export default BrowseBooks;