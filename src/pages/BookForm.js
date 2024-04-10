import React, { useState, useEffect } from 'react';
import { createBook, updateBook, getBook } from '../api/booksApi';
import { getAllAuthors } from '../api/authorsApi';
import { Link } from 'react-router-dom';

function BookForm({ bookId }) {
    const [book, setBook] = useState({
        isbn: '',
        title: '',
        editionNumber: '',
        copyright: '',
        authorId: ''
    });
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAllAuthors().then(setAuthors);
        if (bookId) {
            getBook(bookId).then(data => setBook({ ...data }));
        }
    }, [bookId]);

    const handleChange = (event) => {
        const { name, value } = event.target;
        setBook(prevBook => ({
            ...prevBook,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (bookId) {
            updateBook(book.isbn, book.title, book.editionNumber, book.copyright, book.authorId).then(() => {
                alert('Book updated');
            });
        } else {
            createBook(book.isbn, book.title, book.editionNumber, book.copyright, book.authorId).then(() => {
                alert('Book created');
            });
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <label>ISBN:<input type="text" name="isbn" value={book.isbn} onChange={handleChange} required /></label>
                <label>Title:<input type="text" name="title" value={book.title} onChange={handleChange} required /></label>
                <label>Edition Number:<input type="number" name="editionNumber" value={book.editionNumber} onChange={handleChange} required /></label>
                <label>Copyright:<input type="text" name="copyright" value={book.copyright} onChange={handleChange} required /></label>
                <label>Author:
                    <select name="authorId" value={book.authorId} onChange={handleChange} required>
                        {authors.map(author => (
                            <option key={author.id} value={author.id}>{author.firstName} {author.lastName}</option>
                        ))}
                    </select>
                </label>
                <button type="submit">Submit</button>
            </form>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default BookForm;
