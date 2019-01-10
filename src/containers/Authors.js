import React, {Component, Fragment} from 'react';
import { connect } from 'react-redux';

import { loadAuthors, deleteAuthor, loadAuthor } from '../actions/authorsAction';

class Authors extends Component {
  componentDidMount(){
    this.props.loadAuthors();
  }
  render(){
    const { authors } = this.props;
    const { deleteAuthor, loadAuthor } = this.props;

    if (authors && authors.loader){
      return <h1>Loading...</h1>
    }

    return (
      <div>
        <ul>
          {authors.items.map((author, index)=>
            <li key ={author._id + '_' + index}
                style={{cursor:'pointer', marginBottom:'20px'}}>
            <button type="button" className="btn btn-danger btn-sm mr-1" onClick={() => deleteAuthor(author._id)} > X</button>
            <span onClick={() => { loadAuthor(author._id) }}> {author.first_name} {author.last_name}</span>
            </li>
          )}
        </ul>
      </div>
    );

  }
}

const mapStateToProps = ({authors}) => ({
  authors
});

export default connect(
  mapStateToProps,
  {loadAuthors, deleteAuthor, loadAuthor },
)(Authors);
