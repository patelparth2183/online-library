import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import BookCard from "../components/BookCard";

function Home() {
  const books = useSelector((state) => state.books);

  const popularBooks = books.slice(0, 3);

  const categories = [
    "Fiction",
    "Non-Fiction",
    "Sci-Fi",
    "Fantasy",
    "Biography",
    "Self Help",
  ];

  return (
    <main>
      <section className="hero">
        <div className="container">
          <h2>Welcome to Our Online Library</h2>

          <p>
            Discover interesting books, explore different categories and
            find your next favorite book.
          </p>

          <Link className="primary-button" to="/books">
            Browse Books
          </Link>
        </div>
      </section>

      <section className="section container">
        <h2>Book Categories</h2>

        <div className="categories">
          {categories.map((category) => (
            <Link
              key={category}
              to={`/books/${encodeURIComponent(category)}`}
              className="category-card"
            >
              {category}
            </Link>
          ))}
        </div>
      </section>

      <section className="section container">
        <h2>Popular Books</h2>

        <div className="book-grid">
          {popularBooks.map((book) => (
            <BookCard key={book.id} book={book} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;