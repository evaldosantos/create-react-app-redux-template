import React from 'react';
import { Provider } from 'react-redux'
import { ConnectedRouter } from 'connected-react-router'
import { configureStore, history } from './store/store';
import BasicExample from './BasicExample'

export default () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      
        <BasicExample />
    </Provider>
  )
}