import React, { useState, useEffect } from "react";
import axios from "axios";

function SearchPage() {
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [bookshelf, setBookshelf] = useState(() => {
    return JSON.parse(localStorage.getItem("bookshelf")) || [];
  });

  useEffect(() => {
    if (query) {
      axios
        .get(`https://openlibrary.org/search.json?q=${query}&limit=10&page=1`)
        .then((response) => {
          setResults(response.data.docs);
        });
    } else {
      setResults([]);
    }
  }, [query]);

  const addToBookshelf = (book) => {
    const updatedBookshelf = [...bookshelf, book];
    setBookshelf(updatedBookshelf);
    localStorage.setItem("bookshelf", JSON.stringify(updatedBookshelf));
  };

  return (
    <div className="container">
      <h1>Search Books</h1>
      <input
        type="text"
        className="form-control mb-4"
        placeholder="Search for a book..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
      />
      <div className="row">
        {results.map((book) => (
          <div key={book.key} className="col-md-4 mb-4">
            <div className="card border-warning">
              <div className="card-body">
                <h5 className="card-title">{book.title}</h5>
                <p className="card-text">
                  <strong>Author:</strong> {book.author_name?.join(", ")}
                </p>
                <button
                  onClick={() => addToBookshelf(book)}
                  className="btn btn-success"
                >
                  Add to Bookshelf
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  card: {
    border: "1px solid #ccc",
    padding: "16px",
    margin: "16px 0",
  },
};

export default SearchPage;
