import axios from 'axios';

export const BOOKS_LOAD = 'BOOKS_LOAD';
export const BOOKS_LOAD_SUCCESS = 'BOOKS_LOAD_SUCCESS';
export const BOOKS_LOAD_ERROR = 'BOOKS_LOAD_ERROR';

export const BOOK_LOAD = 'BOOK_LOAD';
export const BOOK_DELETE = 'BOOK_DELETE';


export const loadBooks = () => async (dispatch) => {
  try {
    dispatch({ type: BOOKS_LOAD });
    const response = await axios.get('http://192.168.0.14:4000/books');
      dispatch({
        type: BOOKS_LOAD_SUCCESS,
        books: response.data
      });

  } catch (e) {
    dispatch({
      type: BOOKS_LOAD_ERROR,
      error: e
    });
  }
};

export const loadBook = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKS_LOAD });
    const response = await axios.get(`http://192.168.0.14:4000/books/${id}`);
    dispatch({
      type: BOOK_LOAD,
      book: response.data
    });

  } catch (e) {
    dispatch({
      type: BOOKS_LOAD_ERROR,
      error: e
    });
  }
};

export const saveBook = (book) => async (dispatch) => {
  try {
    dispatch({ type: BOOKS_LOAD });
    const response = await axios.put(`http://192.168.0.14:4000/books/${book._id}`, book);
    dispatch({
      type: BOOK_LOAD,
      book: response.data
    });
  } catch (e) {
    dispatch({
      type: BOOKS_LOAD_ERROR,
      error: e
    });
  }
};

export const deleteBook = (id) => async (dispatch) => {
  try {
    dispatch({ type: BOOKS_LOAD });
    await axios.delete(`http://192.168.0.14:4000/books/${id}`);
    dispatch({
      type: BOOK_DELETE,
      id
    });
  } catch (e) {
    dispatch({
      type: BOOKS_LOAD_ERROR,
      error: e
    });
  }
};

export const addBook = (book) => async (dispatch) => {
  try {
    dispatch({type: BOOKS_LOAD});
    const response = await axios.post('http://192.168.0.14:4000/books', book);
    console.log(response.data)
    dispatch({
      type:BOOK_LOAD,
      book: response.data
    });
  } catch (e) {
    dispatch({
      type: BOOKS_LOAD_ERROR,
      error: e
    });
  }
};
