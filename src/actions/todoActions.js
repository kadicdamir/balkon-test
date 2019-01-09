export const TODO_ADD = 'TODO_ADD';
export const TODO_DELETE = 'TODO_DELETE';
export const TODO_TOGGLE = 'TODO_CHECK';

export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';

export const addTodo = (text) => {
  return {
    type: TODO_ADD,
    id: + new Date(),
    text
  };
};

export const deleteAll = () => {
  return {
    type: TODO_DELETE
  };
};

export const toggleTodo = id => ({
  type: TODO_TOGGLE,
  id
});

export const setVisibilityFilter = filter => ({
  type: SET_VISIBILITY_FILTER,
  filter
})

export const VisibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}