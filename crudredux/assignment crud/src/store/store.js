import { createStore } from 'redux';
import rootReducer from '../crud operation/reducers';

const store = createStore(rootReducer);
export default store;
