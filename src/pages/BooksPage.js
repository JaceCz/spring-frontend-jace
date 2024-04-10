import React, { useState, useEffect } from 'react';
import { getAllBooks } from '../api/booksApi';
import { Link } from 'react-router-dom';

function BooksPage() {
    const [books, setBooks] = useState([]);

    useEffect(() => {
        getAllBooks().then(setBooks);
    }, []);

    return (
        <div>
            <h1>Books</h1>
            {books.map(book => (
                <div key={book.isbn}>
                    <Link to={`/books/${book.isbn}`}>{book.title}</Link>
                    &nbsp;|&nbsp;
                    <Link to={`/books/update?isbn=${book.isbn}`}>Edit</Link>
                    &nbsp;|&nbsp;
                    <Link to={`/books/delete?isbn=${book.isbn}`}>Delete</Link>
                </div>
            ))}
             <Link to="/">Back to Main</Link>
        </div>
    );
}

export default BooksPage;
