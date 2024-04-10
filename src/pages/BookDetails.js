import React, { useState, useEffect } from 'react';
import { getBook } from '../api/booksApi';
import { useParams } from 'react-router-dom';

function BookDetails() {
  const { isbn } = useParams();
  const [book, setBook] = useState({});

  useEffect(() => {
    getBook(isbn).then(setBook);
  }, [isbn]);

  return (
    <div>
      <h1>Book Details</h1>
      <p>Title: {book.title}</p>
      <p>ISBN: {book.isbn}</p>
      <p>Edition Number: {book.editionNumber}</p>
      <p>Copyright: {book.copyright}</p>
      <p>Author ID: {book.authorId}</p>
    </div>
  );
}

export default BookDetails;
