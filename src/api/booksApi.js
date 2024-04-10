// Get All Books
export const getAllBooks = () => {
    return fetch("http://localhost:8080/api/v1/books")
      .then(res => res.json());
  };
  
  // Get Specific Book
  export const getBook = (isbn) => {
    return fetch(`http://localhost:8080/api/v1/books/${isbn}`)
      .then(res => res.json());
  };
  
  // Create Book
  export const createBook = (isbn, title, editionNumber, copyright, authorId) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ isbn, title, editionNumber, copyright, authorId })
    };
  
    return fetch("http://localhost:8080/api/v1/books", requestOptions)
      .then(response => response.json());
  };
  
  // Update Book
  export const updateBook = (isbn, title, editionNumber, copyright, authorId) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ title, editionNumber, copyright, authorId })
    };
  
    return fetch(`http://localhost:8080/api/v1/books/${isbn}`, requestOptions)
      .then(response => response.json());
  };
  
  // Delete Book
  export const deleteBook = (isbn) => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    return fetch(`http://localhost:8080/api/v1/books/${isbn}`, requestOptions)
      .then(response => response.text()); 
  };
  