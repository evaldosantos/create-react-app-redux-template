import React from 'react';
import { Provider } from 'react-redux';
import { configureStore } from './store/store';
import BasicExample from './BasicExample';

const App = () => {
  const store = configureStore();

  return (
    <Provider store={store}>
      <BasicExample />
    </Provider>
  );
};

export default App;
