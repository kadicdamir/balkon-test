import {
  TODO_ADD,
  TODO_DELETE,
  TODO_TOGGLE,
} from '../actions/todoActions'

const todos = (state = [], action) => {
  switch (action.type) {
    case TODO_ADD:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ];
    case TODO_DELETE:
      return [];
    case TODO_TOGGLE:
      return state.map(todo =>
        (todo.id === action.id)
          ? {...todo, completed: !todo.completed}
          : todo
      );
    default:
      return state
  }
}

export default todos