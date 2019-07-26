import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../reducers';

// ទិន្នន័យចាប់ផ្ដើមដំបូងដែលយើងចង់ឲ្យមាននៅក្នុង store
const initialState = {};
const enhancers = [];

// ពួក middleware ផ្សេងៗដូចជា redux-saga,
// redux-thunk ជាដើម
const middleware = [thunk];

// បើសិនជាដំណើរការជា dev mode
// បញ្ចូល redux-devtools
if(process.env.NODE_ENV === 'development') {
  const devToolsExtension = window.__REDUX_DEVTOOLS_EXTENSION__ ;
  if(typeof devToolsExtension === 'function') {
    enhancers.push(devToolsExtension());
  }
}

// ដើម្បីបញ្ចូល enhancers និង middleware
const composedEnhancers = compose(
  applyMiddleware(...middleware),
  ...enhancers
);

const store = createStore(
  rootReducer,
  initialState,
  composedEnhancers
);

// console log ដើម្បីដឹងថាមានបញ្ហាអីដែរឫអត់ពី store របស់យើង
console.log('store', store.getState());

// ដើម្បីងាយស្រួលប្រើ state និង dispatch an action
const dispatch = store.dispatch;
const getState = store.getState;

// បញ្ចេញឲ្យយកទៅប្រើកន្លែងផ្សេងបាន
export { dispatch, getState };

export default store;