import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadBook, saveBook, addBook } from '../actions/booksAction';

class Book extends Component {
  constructor(props) {
    super(props);

    this.state = {
      book: { ...props.book }
    }
  }

  componentWillReceiveProps = (newProps) => {
    this.setState({
      book: newProps.book
    })
  }

  // componentDidMount() {
  //   this.props.loadBook();
  // }

  render() {
    const { saveBook } = this.props;
    const { addBook } = this.props;
    const { book } = this.state;

    if (!book) {
      return null
    }

    return (
      <Fragment>
        <form>
          <div className="form-group">
            <label>Title</label>
            <input type="text"
                   className="form-control"
                   value={book.title}
                   onChange={ (e) => this.setState({ book: { ...book, title: e.target.value } }) } />
          </div>
          <div className="form-group">
            <label>No of pages</label>
            <input type="text"
                   className="form-control"
                   value={book.number_of_pages}
                   onChange={ (e) => this.setState({ book: { ...book, number_of_pages: e.target.value } }) } />
          </div>
          <div className="form-group">
            <label>id code</label>
            <input type="text"
                   className="form-control"
                   value={book.id_code}
                   onChange={ (e) => this.setState({ book: { ...book, id_code: e.target.value } }) } />
          </div>
          <button type="button"
                  className="btn btn-primary"
                  onClick={() => saveBook(this.state.book)}>Save</button>
          <button type="button"
                          className="btn btn-primary ml-1"
                          onClick={() => addBook(this.state.book)}>Add new</button>
        </form>
        <br/>
        {book.title} {book._id}
        <ul>
          {
            book.authors && book.authors.map(author => <li key={author._id}>{author.first_name} {author.last_name}</li>)
          }
        </ul>
      </Fragment>
    );
  }
}

const mapStateToProps = ({books}) => ({
  book: books.items.filter(b => b._id === books.current)[0]
});

export default connect(
  mapStateToProps,
  { loadBook, saveBook, addBook },
)(Book);
