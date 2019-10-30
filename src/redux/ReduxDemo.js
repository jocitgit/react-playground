import React from 'react';
import { createStore, applyMiddleware } from 'redux';
import reduxThunk from 'redux-thunk'; 
import { Provider } from 'react-redux';
// import getCustomers from ('./customers');
import ReduxApp from './components/ReduxApp';

import rootReducer from './rootReducer';

const store = createStore(rootReducer, applyMiddleware(reduxThunk));

// const store = createStore(customerReducer, {}, applyMiddleware(reduxThunk))

function ReduxDemo() { // store passed to container components in ReduxApp
  return (
    <Provider store={store}>
      <ReduxApp />
    </Provider>
  );
}

export default ReduxDemo;