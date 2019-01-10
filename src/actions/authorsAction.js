import axios from 'axios';


export const AUTHORS_LOAD = 'AUTHORS_LOAD';
export const AUTHORS_LOAD_SUCCESS = 'AUTHORS_LOAD_SUCCESS';
export const AUTHORS_LOAD_ERROR = 'AUTHORS_LOAD_ERROR';

export const AUTHOR_LOAD = 'AUTHOR_LOAD';
export const AUTHOR_DELETE = 'AUTHOR_DELETE'

export const loadAuthors = () => async (dispatch) => {
  try {
    dispatch({ type: AUTHORS_LOAD });
    const response = await axios.get('http://192.168.0.14:4000/authors');
    dispatch({
      type: AUTHORS_LOAD_SUCCESS,
      books: response.data
    });

  } catch (e) {
    dispatch({
      type: AUTHORS_LOAD_ERROR,
      error: e
    });
  }
};

export const loadAuthor = (id) => async (dispatch) => {
  try {
    dispatch({ type: AUTHORS_LOAD });
    const response = await axios.get(`http://192.168.0.14:4000/authors/${id}`);
    dispatch({
      type: AUTHOR_LOAD,
      author: response.data
    });
  } catch(e){
    dispatch({
      type: AUTHORS_LOAD_ERROR,
      error: e
    });
  }
}

export const saveAuthor = (author) => async (dispatch) => {
  try {
    dispatch({type:AUTHORS_LOAD});
    const response = await axios.put(`http://192.168.0.14:4000/authors/${author._id}`, author);
    dispatch({
      type:AUTHOR_LOAD,
      author: response.data
    });
  } catch (e) {
    dispatch({
      type: AUTHORS_LOAD_ERROR,
      error: e
    })
  }
}

export const addAuthor = (author) => async (dispatch) => {
  try {
    dispatch({type:AUTHORS_LOAD});
    const response = await axios.post('http://192.168.0.14:4000/authors', author);
    dispatch({
      type:AUTHOR_LOAD,
      author: response.data
    });
  } catch (e) {
    dispatch({
      type: AUTHORS_LOAD_ERROR,
      error: e
    })
  }
}

export const deleteAuthor = (id) => async (dispatch) => {
  try {
    dispatch({type:AUTHORS_LOAD});
    await axios.delete(`http://192.168.0.14:4000/authors/${id}`);
    dispatch({
      type: AUTHOR_DELETE,
      id
    });
  } catch (e) {
    dispatch({
      type: AUTHORS_LOAD_ERROR,
      error: e
    });
  }
};
