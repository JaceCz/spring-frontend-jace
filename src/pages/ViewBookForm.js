import React, { useState } from 'react';
import { getBook } from '../api/booksApi';
import { Link } from 'react-router-dom';

function ViewBookForm() {
    const [isbn, setIsbn] = useState('');
    const [book, setBook] = useState({});
    const [title, setTitle] = useState('');
    const [editionNumber, setEditionNumber] = useState('');
    const [copyright, setCopyright] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        getBook(isbn)
            .then(data => {
                if (data) {
                    setTitle(data.title);
                    setEditionNumber(data.editionNumber);
                    setCopyright(data.copyright);
                    setBook(data); 
                } else {
                    alert("No book data returned.");
                }
            })
            .catch(error => {
                alert('Error fetching book: ' + error.message);
                console.error('Fetch error: ', error);
            });
    };

    return (
        <div>
            <h1>View Book</h1>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="ISBN" value={isbn} onChange={(e) => setIsbn(e.target.value)} required />
                <button type="submit">View Book</button>
            </form>
            {book && (
                <div>
                    <p>Title: {title}</p>
                    <p>ISBN: {book.isbn}</p>
                    <p>Edition Number: {editionNumber}</p>
                    <p>Copyright: {copyright}</p>
                </div>
            )}
            <p></p>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default ViewBookForm;
