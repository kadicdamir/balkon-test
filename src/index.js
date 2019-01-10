import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

import { createStore, applyMiddleware } from 'redux'
import { Provider } from 'react-redux';
import ReduxThunk from 'redux-thunk';

import App from './components/App'

import rootReducer from './reducers'

axios.defaults.headers.common['x-access-token'] = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiaWF0IjoxNTQ3MTA5Mjk3LCJleHAiOjE1NDcxOTU2OTd9.NPtCDSib0yTPQtcEyu4hptNPtuvehtoP0XaKsvW3x1I';


const createStoreWithMiddleware = applyMiddleware(ReduxThunk)(
  createStore,
);

const store = createStoreWithMiddleware(
  rootReducer,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
)
