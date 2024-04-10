import React, { useState } from 'react';
import { updateBook, getBook } from '../api/booksApi';
import { Link } from 'react-router-dom';

function UpdateBookForm() {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [editionNumber, setEditionNumber] = useState('');
    const [copyright, setCopyright] = useState('');
    const [authorId, setAuthorId] = useState('');

    const handleLoadBook = (e) => {
        e.preventDefault();
        getBook(isbn).then(book => {
            if (book) {
                setTitle(book.title);
                setEditionNumber(book.editionNumber);
                setAuthorId(book.authorId);
                setCopyright(book.copyright);
            } else {
                alert("Book not found!");
            }
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        updateBook(isbn, { title, editionNumber, copyright, authorId })
            .then(() => alert('Book Updated'))
            .catch(err => alert('Error updating book'));
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
                    <input type="number" value={editionNumber} onChange={(e) => setEditionNumber(e.target.value)} required />
                </label>
                <label>
                    Copyright:
                    <input type="text" value={copyright} onChange={(e) => setCopyright(e.target.value)} required />
                </label>
                <label>
                    Author ID:
                    <input type="text" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
                </label>
                <button type="submit">Update Book</button>
            </form>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default UpdateBookForm;
