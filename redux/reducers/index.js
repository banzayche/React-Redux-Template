import counter from './examples01/counter'
import images from './examples01/images'
import sum from './examples01/sum'

import todosList from './todos/todosList'
import todosFilter from './todos/todosFilter'

import books from './booklist/booklist'

import { combineReducers } from 'redux'
import {routerReducer } from 'react-router-redux'

export default combineReducers({
    examples: combineReducers({
        count:counter,
        sum,
        images
    }),
    todos: combineReducers({
        todosList,
        todosFilter
    }),
    booklist: combineReducers({
        books
    }),
    // youtube: combineReducers({
    // }),
    routing: routerReducer
})
