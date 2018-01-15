import { createStore, applyMiddleware, compose } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import { composeWithDevTools } from 'redux-devtools-extension';

//import the root reducer
import rootReducer from './reducers/index';

import comments from './data/comments';
import posts from './data/posts';

//create an object for the default data

const defaultState = {
	posts,
	comments
};

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

// const enhancers = compose(
// 	window.__REDUX_DEVTOOLS_EXTENSION__ ? window.__REDUX_DEVTOOLS_EXTENSION__() : f => f
// );


const store = createStore(rootReducer, defaultState, composeWithDevTools(
	applyMiddleware(...middleware)
));

export const history = syncHistoryWithStore(browserHistory, store);

if(module.hot) {
	module.hot.accept('./reducers', () => {
		const nextRootReducer = require('./reducers/index').default;
		store.replaceReducer(nextRootReducer);
	});
}

export default store;