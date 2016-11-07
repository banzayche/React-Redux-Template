import {render} from 'react-dom'
import App from './components/App'
import Todos from './components/Todos'
import Examples from './components/Examples'
import Examples02 from './components/Examples02'
import BookList from './components/BookList'
import store from './redux/store/config'
import React from 'react'
import { Provider } from 'react-redux'
import { Router, Route, IndexRoute, browserHistory } from 'react-router'
import { syncHistoryWithStore } from 'react-router-redux'
// Create an enhanced history that syncs navigation events with the store
const history = syncHistoryWithStore(browserHistory, store)

render(
  <Provider store={store}>
    { /* Tell the Router to use our enhanced history */ }
    <Router history={history}>
      <Route path="/" component={App}>
        <IndexRoute component={Examples}/>
        <Route path="ex02" component={Examples02}/>
        <Route path="todos" component={Todos}/>
        <Route path="booklist" component={BookList}/>
      </Route>
    </Router>
  </Provider>,
  document.getElementById('root')
)
