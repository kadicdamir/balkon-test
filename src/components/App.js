import React from 'react'
import AddTodo from '../containers/AddTodo'
import AddTodoNew from '../containers/AddTodoNew'
import VisibleTodoList from '../containers/VisibleTodoList'
import Books from '../containers/Books'
import Book from '../containers/Book'
import Footer from './Footer'

const App = () => (
  <div className="container" style={{ marginTop: '50px' }}>
    <div className="row">
      <div className="col">
        <Books />
      </div>
      <div className="col" style={{ backgroundColor: 'yellow' }}>
        <Book />
      </div>
    </div>

  </div>
)

export default App
