import React, { useState } from 'react';
import { deleteBook } from '../api/booksApi';
import { Link } from 'react-router-dom';

function DeleteBookForm() {
    const [isbn, setIsbn] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this book?')) {
            deleteBook(isbn)
                .then(() => alert('Book Deleted'))
                .catch(err => alert('Error deleting book'));
        }
    };

    return (
        <div>
            <h1>Delete Book</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    ISBN:
                    <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                </label>
                <button type="submit">Delete Book</button>
            </form>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default DeleteBookForm;
