import React, { useState } from 'react';
import { deleteAuthor } from '../api/authorsApi';
import { Link } from 'react-router-dom';

function DeleteAuthorForm() {
    const [authorId, setAuthorId] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (window.confirm('Are you sure you want to delete this author?')) {
            deleteAuthor(authorId).then(() => alert('Author Deleted'));
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
            <button type="submit">Delete Author</button>
            <Link to="/">Back to Main</Link>
        </form>
    );
}

export default DeleteAuthorForm;
