import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadBooks, loadBook, deleteBook } from '../actions/booksAction';

class Books extends Component {
  componentDidMount() {
    this.props.loadBooks();
  }

  render() {
    const { books, loadBook, deleteBook } = this.props;

    if (books && books.loader) {
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <ul>
        {books.items.map((book, index) =>
          <li key={book._id + '_' + index}
              style={{cursor: 'pointer', marginBottom: '30px'}}>
              <button type="button" className="btn btn-danger btn-sm m--" onClick={() => deleteBook(book._id)}  >X</button>
              <span onClick={() => { loadBook(book._id) }}>{book.title}</span>
            <ul >
              {
                book.authors && book.authors.map(author => <li key={author._id}>{author.first_name} {author.last_name}</li>)
              }
            </ul>
          </li>

        )}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = ({books}) => ({
  books
});

export default connect(
  mapStateToProps,
  { loadBooks, loadBook, deleteBook },
)(Books);
