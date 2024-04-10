import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthorsPage from './pages/AuthorsPage';
import AuthorForm from './pages/AuthorForm';
import BooksPage from './pages/BooksPage';
import BookForm from './pages/BookForm';
import UpdateAuthorForm from './pages/UpdateAuthorForm';
import UpdateBookForm from './pages/UpdateBookForm';
import DeleteAuthorForm from './pages/DeleteAuthorForm';
import DeleteBookForm from './pages/DeleteBookForm';

function App() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<MainPage />} />
                <Route path="/authors" element={<AuthorsPage />} />
                <Route path="/authors/new" element={<AuthorForm />} />
                <Route path="/authors/update" element={<UpdateAuthorForm />} />
                <Route path="/authors/delete" element={<DeleteAuthorForm />} />
                <Route path="/books" element={<BooksPage />} />
                <Route path="/books/new" element={<BookForm />} />
                <Route path="/books/update" element={<UpdateBookForm />} />
                <Route path="/books/delete" element={<DeleteBookForm />} />
            </Routes>
        </Router>
    );
}

export default App;
