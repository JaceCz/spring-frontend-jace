import React, { useState, useEffect } from 'react';
import { getAllAuthors } from '../api/authorsApi';
import { Link } from 'react-router-dom';

function AuthorsPage() {
    const [authors, setAuthors] = useState([]);

    useEffect(() => {
        getAllAuthors().then(setAuthors);
    }, []);

    return (
        <div>
            <h1>Authors</h1>
            {authors.map(author => (
                <div key={author.id}>
                    <Link to={`/authors/${author.id}`}>{author.firstName} {author.lastName}</Link>
                    &nbsp;|&nbsp;
                    <Link to={`/authors/update?authorId=${author.id}`}>Edit</Link>
                    &nbsp;|&nbsp;
                    <Link to={`/authors/delete?authorId=${author.id}`}>Delete</Link>
                </div>
            ))}
             <Link to="/">Back to Main</Link>
        </div>
    );
}

export default AuthorsPage;
