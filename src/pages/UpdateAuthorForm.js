import React, { useState } from 'react';
import { updateAuthor } from '../api/authorsApi';
import { Link } from 'react-router-dom';

function UpdateAuthorForm() {
    const [authorId, setAuthorId] = useState('');
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        updateAuthor(authorId, firstName, lastName).then(() => alert('Author Updated'));
    };

    return (
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Author ID" value={authorId} onChange={(e) => setAuthorId(e.target.value)} required />
            <input type="text" placeholder="First Name" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
            <input type="text" placeholder="Last Name" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
            <button type="submit">Update Author</button>
            <Link to="/">Back to Main</Link>
        </form>
    );
}

export default UpdateAuthorForm;
