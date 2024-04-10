import React, { useState } from 'react';
import { getAuthor } from '../api/authorsApi';
import { Link } from 'react-router-dom';

function ViewAuthorForm() {
    const [authorId, setAuthorId] = useState('');
    const [author, setAuthor] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!authorId) {
            alert("Please enter an author ID.");
            return;
        }
        getAuthor(authorId)
            .then(data => {
                if (data) {
                    setAuthor(data);
                } else {
                    alert("No data returned. Author may not exist.");
                }
            })
            .catch(error => {
                console.error('Error fetching author:', error);
                alert('Error fetching author. Please try again.');
                setAuthor(null);
            });
    };

    return (
        <div>
            <h1>View Author</h1>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Author ID"
                    value={authorId}
                    onChange={(e) => setAuthorId(e.target.value)}
                    required
                />
                <button type="submit">View Author</button>
            </form>
            {author ? (
                <div>
                    <p>First Name: {author.firstName || "N/A"}</p>
                    <p>Last Name: {author.lastName || "N/A"}</p>
                </div>
            ) : (
                <p>No author details to display.</p>
            )}
            <Link to="/">Back to Main</Link>
        </div>
    );
}

export default ViewAuthorForm;

