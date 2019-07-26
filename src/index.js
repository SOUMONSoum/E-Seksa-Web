import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
import { I18nextProvider } from 'react-i18next';
import { Provider } from 'react-redux';

import 'katex/dist/katex.min.css';
import App from './App';
import store from './tools/store';
import i18n from './services/i18n';
import * as serviceWorker from './serviceWorker';

ReactDOM.render(
  <Provider store={store} >
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </I18nextProvider>
  </Provider>, document.getElementById('root'));
serviceWorker.unregister();
