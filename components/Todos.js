import React, { Component } from 'react'
import AddTodo from '../containers/todos/AddTodo'
import TodosList from '../containers/todos/TodosList'
import FiltersList from '../containers/todos/FiltersList'

export default class Todos extends Component {
  render() {
    return (
      <div>
        <h1>My great TODO List</h1>
        <AddTodo/>
        <TodosList/>
        <FiltersList/>
      </div>
    )
  }
}
