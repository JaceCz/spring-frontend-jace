import React, { useState } from 'react';
import { createAuthor, updateAuthor } from '../api/authorsApi';
import { Link } from 'react-router-dom';

function AuthorForm({ authorId }) {
    const [author, setAuthor] = useState({ firstName: '', lastName: '' });

    const handleChange = (event) => {
        const { name, value } = event.target;
        setAuthor(prevAuthor => ({
            ...prevAuthor,
            [name]: value
        }));
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        if (authorId) {
            updateAuthor(authorId, author.firstName, author.lastName).then(() => {
                alert('Author updated');
            });
        } else {
            createAuthor(author.firstName, author.lastName).then(() => {
                alert('Author created');
            });
        }
    };

    return (
        <div>
            <h1>Create Author</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    First Name:
                    <input type="text" name="firstName" value={author.firstName} onChange={handleChange} required />
                </label>
                <label>
                    Last Name:
                    <input type="text" name="lastName" value={author.lastName} onChange={handleChange} required />
                </label>
                <button type="submit">Submit</button>
            </form>
            <p></p>
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default AuthorForm;
