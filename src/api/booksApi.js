// Get All Books
export const getAllBooks = () => {
    return fetch("http://localhost:8080/api/v1/books")
      .then(res => res.json());
  };
  
  // Get Specific Book
  export const getBook = (isbn) => {
    return fetch(`http://localhost:8080/api/v1/books/${isbn}`)
        .then(res => {
            if (!res.ok) {
                throw new Error(`Network response was not ok: ${res.status} ${res.statusText}`);
            }
            return res.text();  // First convert to text
        })
        .then(text => {
            return text.length ? JSON.parse(text) : {};  // Then parse text as JSON if not empty
        });
};

// Create Book
export const createBook = (isbn, title, editionNumber, copyright, authorId) => {
  const requestOptions = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',  // Correct Content-Type for URL-encoded form data
    },
    body: new URLSearchParams({
      isbn, 
      title, 
      editionNumber: editionNumber.toString(),  // Ensure numbers are sent as strings
      copyright,
      author_id: authorId  // Make sure the parameter names match exactly with backend expectation
    })
  };

  return fetch("http://localhost:8080/api/v1/books", requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }
      return response.text();  // Assuming the server responds with text (plain response)
    })
    .then(result => {
      console.log("Creation success:", result);
      return result;  // You might want to handle JSON response depending on what your server sends back
    })
    .catch(error => {
      console.error('Error creating book:', error);
      throw error;
    });
};


// Update Book
// Update Book API integration
export const updateBook = (isbn, title, editionNumber, copyright, authorId) => {
  const requestOptions = {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',  // ensuring header is set for URL-encoded form data
    },
    body: new URLSearchParams({
      title: title,
      editionNumber: editionNumber.toString(),  // ensuring numbers are sent as strings
      copyright: copyright,
      author_id: authorId.toString()  // ensuring IDs are sent as strings
    })
  };

  return fetch(`http://localhost:8080/api/v1/books/${isbn}`, requestOptions)
    .then(response => {
      if (!response.ok) {
        throw new Error(`Failed to update book: Status ${response.status}`);
      }
      return response.text();  // Assuming the server sends back a plain text response
    })
    .catch(error => {
      console.error('Error updating book:', error);
      throw error;
    });
};





  
  // Delete Book
  export const deleteBook = (isbn) => {
    const requestOptions = {
      method: 'DELETE'
    };
  
    return fetch(`http://localhost:8080/api/v1/books/${isbn}`, requestOptions)
      .then(response => response.text()); 
  };
  