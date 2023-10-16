import { createStore } from "redux";
//import { reducers } from "./myredux/BookReducer";
import reducers  from "./reducers/index";

const store = createStore(reducers, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
//const store = createStore(BookReducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
export default store;

