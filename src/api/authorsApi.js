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
      headers: {
          'Content-Type': 'application/json',
      }
  };

  // Include firstName and lastName in the query string
  const url = new URL(`http://localhost:8080/api/v1/authors/${authorId}`);
  url.search = new URLSearchParams({ firstName, lastName }).toString();

  return fetch(url, requestOptions)
      .then(response => {
          if (!response.ok) {
              throw new Error('Failed to update author');
          }
          return response.text();  // assuming the response is plain text
      });
};

  // Delete Author
  export const deleteAuthor = (authorId) => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    return fetch(`http://localhost:8080/api/v1/authors/${authorId}`, requestOptions)
      .then(response => response.text()); 
  };
  