import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MainPage from './pages/MainPage';
import AuthorsPage from './pages/AuthorsPage';
import AuthorForm from './pages/AuthorForm';
import BooksPage from './pages/BooksPage';
import BookForm from './pages/BookForm';
import UpdateAuthorForm from './pages/UpdateAuthorForm';  
import UpdateBookForm from './pages/UpdateBookForm';      
import DeleteAuthorForm from './pages/DeleteAuthorForm';  
import DeleteBookForm from './pages/DeleteBookForm';      

function App() {
    return (
        <Router>
            <Switch>
                <Route path="/" exact component={MainPage} />
                <Route path="/authors" exact component={AuthorsPage} />
                <Route path="/authors/new" component={AuthorForm} />
                <Route path="/authors/update" component={UpdateAuthorForm} />
                <Route path="/authors/delete" component={DeleteAuthorForm} />
                <Route path="/books" exact component={BooksPage} />
                <Route path="/books/new" component={BookForm} />
                <Route path="/books/update" component={UpdateBookForm} />
                <Route path="/books/delete" component={DeleteBookForm} />
            </Switch>
        </Router>
    );
}

export default App;
