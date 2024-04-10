import React from 'react';
import { Link } from 'react-router-dom';

function MainPage() {
    return (
        <div>
            <h1>Book and Author Management System</h1>
            <h2>Authors</h2>
            <ul>
                <li><Link to="/authors">Get All Authors</Link></li>
                <li><Link to="/authors/new">Create New Author</Link></li>
                <li><Link to="/authors/update">Update Author</Link></li>  {/* Assuming ID will be selected in the update form */}
                <li><Link to="/authors/delete">Delete Author</Link></li>  {/* Assuming ID will be selected in the delete form */}
            </ul>
            <h2>Books</h2>
            <ul>
                <li><Link to="/books">Get All Books</Link></li>
                <li><Link to="/books/new">Create New Book</Link></li>
                <li><Link to="/books/update">Update Book</Link></li>  {/* Assuming ISBN will be selected in the update form */}
                <li><Link to="/books/delete">Delete Book</Link></li>  {/* Assuming ISBN will be selected in the delete form */}
            </ul>
        </div>
    );
}

export default MainPage;
