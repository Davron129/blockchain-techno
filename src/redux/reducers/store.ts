import { createStore, compose, applyMiddleware } from 'redux';
import { combineReducers } from "redux";
import { scroll } from "./scroll";
import { colorScheme } from "./colorScheme";
import thunk from 'redux-thunk';

const reducers =  combineReducers({
    scroll,
    colorScheme,
})

declare global {
    interface Window {
      __REDUX_DEVTOOLS_EXTENSION_COMPOSE__?: typeof compose;
    }
  }
  
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const store = createStore(
    reducers,
    composeEnhancers(applyMiddleware(
      thunk
    ))
); 

export type RootState = ReturnType<typeof reducers>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch
