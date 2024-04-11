import React, { useState } from 'react';
import { updateBook, getBook } from '../api/booksApi';
import { Link } from 'react-router-dom';

function UpdateBookForm() {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [editionNumber, setEditionNumber] = useState(0);  // initialized to 0 for a number input
    const [copyright, setCopyright] = useState('');
    const [authorId, setAuthorId] = useState(0);  // initialized to 0 assuming author ID is a number

    const handleLoadBook = (e) => {
        e.preventDefault();
        getBook(isbn).then(book => {
            if (book) {
                setTitle(book.title || '');
                setEditionNumber(book.editionNumber || 0);
                setAuthorId(book.authorId || 0);
                setCopyright(book.copyright || '');
            } else {
                alert("Book not found!");
            }
        }).catch(err => {
            console.error('Error loading book:', err);
            alert('Error loading book');
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(isbn, title, editionNumber, copyright, authorId)
            .then(() => alert('Book Updated'))
            .catch(err => {
                console.error('Error updating book:', err);
                alert(`Error updating book: ${err.message}`);
            });
    };

    return (
        <div>
            <h1>Update Book</h1>
            <form onSubmit={handleLoadBook}>
                <label>
                    ISBN:
                    <input type="text" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                </label>
                <button type="submit">Load Book</button>
            </form>
            <form onSubmit={handleSubmit}>
                <label>
                    Title:
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </label>
                <label>
                    Edition Number:
                    <input type="number" value={editionNumber} onChange={(e) => setEditionNumber(Number(e.target.value))} required />
                </label>
                <label>
                    Copyright:
                    <input type="text" value={copyright} onChange={(e) => setCopyright(e.target.value)} required />
                </label>
                <label>
                    Author ID:
                    <input type="text" value={authorId} onChange={(e) => setAuthorId(Number(e.target.value))} required />
                </label>
                <button type="submit">Update Book</button>
            </form>
            <p></p>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default UpdateBookForm;
