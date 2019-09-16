import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import rootReducer from '../redux/reducers';

const intialState = {};

const middleware = [thunk];

// if (!process.env.BROWSER) {
// 	global.window = {}; // Temporarily define window for server-side
// }

const store = createStore(rootReducer, intialState, compose(applyMiddleware(...middleware), window.__REDUX_DEVTOOLS_EXTENSION__&& window.__REDUX_DEVTOOLS_EXTENSION__()
));

export default store;
