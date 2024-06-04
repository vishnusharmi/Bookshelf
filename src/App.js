import React from "react";
import { Route, Link, Routes } from "react-router-dom";
import SearchPage from "./SearchPage";
import BookshelfPage from "./BookshelfPage";

function App() {
  return (
    <div>
      <nav className="navbar navbar-expand-lg bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            <Link
              className=" text-warning nav-item nav-link text-style-none"
              to="/"
            >
              Search Books
            </Link>
          </a>
          <button
            className="navbar-toggler text-white"
            type="button"
            data-bs-toggle="collapse "
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon text-white"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav">
              <li className="nav-item">
                <a className="navbar-brand" href="#">
                  <Link className="text-warning " to="/bookshelf">
                    My Bookshelf
                  </Link>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<SearchPage />} />
        <Route path="/bookshelf" element={<BookshelfPage />} />
      </Routes>
    </div>
  );
}

export default App;
