import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
//import storyReducer from '../reducers/story';
import rootReducer from '../reducers';

const logger = createLogger();

//const store = createStore(storyReducer);
// The second parameter is mentioned as undefined because it is usually used for the initial state
// of the redux store but since we have handled the initial state of the reducers we are not defining 
// it here. 
const store = createStore(rootReducer, undefined, applyMiddleware(logger));

export default store;