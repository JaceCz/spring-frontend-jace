import React, { useState, useEffect } from 'react';
import { getAuthor } from '../api/authorsApi';
import { useParams } from 'react-router-dom';

function AuthorDetails() {
  const { authorId } = useParams();
  const [author, setAuthor] = useState({});

  useEffect(() => {
    getAuthor(authorId).then(setAuthor);
  }, [authorId]);

  return (
    <div>
      <h1>Author Details</h1>
      <p>First Name: {author.firstName}</p>
      <p>Last Name: {author.lastName}</p>
    </div>
  );
}

export default AuthorDetails;
