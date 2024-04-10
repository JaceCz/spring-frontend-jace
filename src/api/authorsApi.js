// Get All Authors
export const getAllAuthors = () => {
    return fetch("http://localhost:8080/api/v1/authors")
    .then(res => res.json());
};


// Get Specific Author
export const getAuthor = (authorId) => {
    return fetch(`http://localhost:8080/api/v1/authors/${authorId}`)
      .then(res => res.json());
  };
  
  // Create Author
  export const createAuthor = (firstName, lastName) => {
    const requestOptions = {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName })
    };
  
    return fetch("http://localhost:8080/api/v1/authors", requestOptions)
      .then(response => response.json());
  };
  
  // Update Author
  export const updateAuthor = (authorId, firstName, lastName) => {
    const requestOptions = {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ firstName, lastName })
    };
  
    return fetch(`http://localhost:8080/api/v1/authors/${authorId}`, requestOptions)
      .then(response => response.json());
  };
  
  // Delete Author
  export const deleteAuthor = (authorId) => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    return fetch(`http://localhost:8080/api/v1/authors/${authorId}`, requestOptions)
      .then(response => response.text()); 
  };
  