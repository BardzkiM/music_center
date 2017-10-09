import {render} from 'react-dom';
import {Provider} from 'react-redux';
import React from 'react';
import store from './store/store';

render(
  <Provider store={store}>
    <div>
    </div>
  </Provider>
  , document.getElementById('root')
);