import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk';
// import reducers from './reducers';
import 'bootstrap/dist/css/bootstrap.css';
import './scss/App.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { BrowserRouter } from 'react-router-dom';

// const store = createStore(reducers, {}, applyMiddleware(reduxThunk));

ReactDOM.render(
  //<Provider store={store}>
  <Provider>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);
registerServiceWorker();
