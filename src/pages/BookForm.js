import React, { useState } from 'react';
import { createBook } from '../api/booksApi';
import { Link } from 'react-router-dom';

function BookForm() {
    const [isbn, setIsbn] = useState('');
    const [title, setTitle] = useState('');
    const [editionNumber, setEditionNumber] = useState('');
    const [copyright, setCopyright] = useState('');
    const [authorId, setAuthorId] = useState('');

    const handleSubmit = (event) => {
        event.preventDefault();
        if (!isbn || !title || !editionNumber || !copyright || !authorId) {
            alert('All fields must be filled');
            return;
        }

        createBook(isbn, title, editionNumber, copyright, authorId)
            .then(response => {
                alert('Book created successfully.');
                // Clearing the form if needed
                setIsbn('');
                setTitle('');
                setEditionNumber('');
                setCopyright('');
                setAuthorId('');
            })
            .catch(error => {
                console.log('Creation failed with error:', error);
                alert('Failed to create book. Please check console for details.');
            });
    };

    return (
        <div>
            <h1>Create Book</h1>
            <form onSubmit={handleSubmit}>
                <label>ISBN:<input type="text" value={isbn} onChange={e => setIsbn(e.target.value)} required /></label>
                <label>Title:<input type="text" value={title} onChange={e => setTitle(e.target.value)} required /></label>
                <label>Edition Number:<input type="number" value={editionNumber} onChange={e => setEditionNumber(e.target.value)} required /></label>
                <label>Copyright:<input type="text" value={copyright} onChange={e => setCopyright(e.target.value)} required /></label>
                <label>Author ID:<input type="text" value={authorId} onChange={e => setAuthorId(e.target.value)} required /></label>
                <p></p>
                <button type="submit">Create Book</button>
            </form>
            <p></p>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default BookForm;
