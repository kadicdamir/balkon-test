import React, {Component, Fragment } from 'react';
import { connect } from 'react-redux';

import { loadAuthor, saveAuthor, addAuthor } from '../actions/authorsAction';

class Author extends Component {
  constructor(props){
    super(props);

    this.state = {
      author: {...props.author}
    }
  }
  componentWillReceiveProps = (newProps) => {
    this.setState({
      author: newProps.author
    })
  }
  render(){
    const { saveAuthor, addAuthor } = this.props;
    const { author } = this.state;

    if (!author){
      return null
    }

    return (
      <Fragment>
        <form>
        <div className="form-group">
          <label>First name</label>
          <input type="text"
                 className="form-control"
                 value={author.first_name}
                 onChange={ (e) => this.setState({ author: { ...author, first_name: e.target.value } }) } />
        </div>
        <div className="form-group">
          <label>Last name</label>
          <input type="text"
                 className="form-control"
                 value={author.last_name}
                 onChange={ (e) => this.setState({ author: { ...author, last_name: e.target.value } }) } />
        </div>
        <button type="button"
                className="btn btn-primary"
                onClick={() => saveAuthor(this.state.author)}>Save</button>
        <button type="button"
                className="btn btn-primary ml-1"
                onClick={() => addAuthor(this.state.author)}>Add new author</button>
        </form>
        <br/>
        {author.first_name} {author.last_name}
      </Fragment>
    );
  }
}

const mapStateToProps = ({authors}) => ({
  author: authors.items.filter(a => a._id === authors.current)[0]
});

export default connect(
  mapStateToProps,
  { loadAuthor, saveAuthor, addAuthor },
)(Author);
