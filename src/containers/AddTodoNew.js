import React from 'react'
import { connect } from 'react-redux'


import {addTodo, deleteAll} from '../actions/todoActions'

const AddTodo = ({ dodaj, brisanje }) => {
  let input

  return (
    <div>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dodaj(input.value + ' test ');
        input.value = '';
      }}>
        <input ref={node => input = node} />
        <br/>
        <button type="submit">
          Add Todo
        </button>
        <br/>
        <button type="button" onClick={() => {
          brisanje()
        }}>
          Brisanje
        </button>
      </form>
    </div>
  )
};

const mapDispatchToProps = dispatch => ({
  dodaj: text => dispatch(addTodo(text)),
  brisanje: () => dispatch(deleteAll()),
  dispatch: dispatch
});

export default connect(null, mapDispatchToProps)(AddTodo)