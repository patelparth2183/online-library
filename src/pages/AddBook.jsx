import { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";

import { addBook } from "../redux/bookSlice";

function AddBook() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: "",
    author: "",
    category: "",
    description: "",
    rating: "",
  });

  const [errors, setErrors] = useState({});

  function handleChange(event) {
    const { name, value } = event.target;

    setFormData({
      ...formData,
      [name]: value,
    });
  }

  function validateForm() {
    const newErrors = {};

    if (!formData.title.trim()) {
      newErrors.title = "Title is required";
    }

    if (!formData.author.trim()) {
      newErrors.author = "Author is required";
    }

    if (!formData.category.trim()) {
      newErrors.category = "Category is required";
    }

    if (!formData.description.trim()) {
      newErrors.description = "Description is required";
    }

    if (!formData.rating) {
      newErrors.rating = "Rating is required";
    } else if (
      Number(formData.rating) < 1 ||
      Number(formData.rating) > 5
    ) {
      newErrors.rating = "Rating must be between 1 and 5";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;
  }

  function handleSubmit(event) {
    event.preventDefault();

    if (!validateForm()) {
      return;
    }

    const newBook = {
      id: Date.now(),
      title: formData.title,
      author: formData.author,
      category: formData.category,
      description: formData.description,
      rating: Number(formData.rating),
    };

    dispatch(addBook(newBook));

    navigate("/books");
  }

  return (
    <main className="container section">
      <h2>Add New Book</h2>

      <form className="book-form" onSubmit={handleSubmit}>
        <div className="form-group">
          <label>Book Title</label>

          <input
            type="text"
            name="title"
            value={formData.title}
            onChange={handleChange}
          />

          {errors.title && (
            <p className="error">{errors.title}</p>
          )}
        </div>

        <div className="form-group">
          <label>Author</label>

          <input
            type="text"
            name="author"
            value={formData.author}
            onChange={handleChange}
          />

          {errors.author && (
            <p className="error">{errors.author}</p>
          )}
        </div>

        <div className="form-group">
          <label>Category</label>

          <input
            type="text"
            name="category"
            value={formData.category}
            onChange={handleChange}
          />

          {errors.category && (
            <p className="error">{errors.category}</p>
          )}
        </div>

        <div className="form-group">
          <label>Description</label>

          <textarea
            name="description"
            value={formData.description}
            onChange={handleChange}
            rows="5"
          ></textarea>

          {errors.description && (
            <p className="error">{errors.description}</p>
          )}
        </div>

        <div className="form-group">
          <label>Rating</label>

          <input
            type="number"
            name="rating"
            value={formData.rating}
            onChange={handleChange}
            min="1"
            max="5"
            step="0.1"
          />

          {errors.rating && (
            <p className="error">{errors.rating}</p>
          )}
        </div>

        <button type="submit" className="primary-button">
          Add Book
        </button>
      </form>
    </main>
  );
}

export default AddBook;