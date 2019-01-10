import { AUTHORS_LOAD, AUTHORS_LOAD_SUCCESS, AUTHORS_LOAD_ERROR, AUTHOR_LOAD, AUTHOR_DELETE } from '../actions/authorsAction'

const INIT_STATE = {
  items: [],
  loader: false,
  error: null,
  current: null
}

const authorsReducer = ( state = INIT_STATE, action) => {
  switch (action.type){
    case AUTHORS_LOAD:
      return {
        ...state,
        loader: true
      };
    case AUTHORS_LOAD_SUCCESS:
      return {
        ...state,
        items: action.books,
        loader: false,
        error: null
      };
    case AUTHORS_LOAD_ERROR:
      return {
        ...state,
        loader: false,
        error: action.error
      };
    case AUTHOR_LOAD:
      const { author } = action;

      const items = state.items.map(
        item => {
          if(item._id !== author._id){
            return item;
          }
          return author;
        }
      );

      if (items.filter(i => i._id ===author._id).length === 0) {
        items.push(author);
      }

      return {
        ...state,
        items,
        loader:false,
        error: null,
        current: author._id
      };
    case AUTHOR_DELETE:
      const { id } = action;

      return {
        ...state,
        items: state.items.filter(item => item._id !== id),
        loader: false,
        error: null,
        current:null
      }
    default:
      return state
  }
}

export default authorsReducer
