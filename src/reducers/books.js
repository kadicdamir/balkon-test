import { BOOKS_LOAD, BOOKS_LOAD_SUCCESS, BOOKS_LOAD_ERROR, BOOK_LOAD, BOOK_DELETE } from '../actions/booksAction'

const INIT_STATE = {
  items: [],
  loader: false,
  error: null,
  current: null
}

const booksReducer = (state = INIT_STATE, action) => {
  switch (action.type) {
    case BOOKS_LOAD:
      return {
        ...state,
        loader: true
      };
    case BOOKS_LOAD_SUCCESS:
      return {
        ...state,
        items: action.books,
        loader: false,
        error: null
      };
    case BOOKS_LOAD_ERROR:
      return {
        ...state,
        loader: false,
        error: action.error
      };
    case BOOK_LOAD:
      const { book } = action;

      return {
        ...state,
        items: state.items.map(
          item => {
            if (item._id !== book._id) {
              return item;
            }
            return book;
          }
        ),
        loader: false,
        error: null,
        current: book._id
      };
    case BOOK_DELETE:
      const { id } = action;

      return {
        ...state,
        items: state.items.filter(item => item._id !== id),
        loader: false,
        error: null,
        current: null
      };
    default:
      return state
  }
}

export default booksReducer
