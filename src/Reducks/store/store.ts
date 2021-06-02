import { createStore as reduxCreateStore, combineReducers, applyMiddleware } from 'redux';
import { connectRouter, routerMiddleware } from 'connected-react-router';
import { UsersReducer } from '../users/reducers';
import thunk from 'redux-thunk';
import { History } from 'history';
import { Store, $CombinedState, AnyAction } from 'redux';
import { RouterState } from 'connected-react-router';

export type CreateStore = (history: History) => Store<
  {
    readonly [$CombinedState]?: undefined;
  } & {
    router: RouterState<unknown>;
    users: {
      isSignedIn: boolean;
      uid: string;
      username: string;
    };
  },
  AnyAction
>;

const createStore: CreateStore = (history) => {
  return reduxCreateStore(
    combineReducers({
      router: connectRouter(history),
      users: UsersReducer,
    }),
    applyMiddleware(routerMiddleware(history), thunk)
  );
};

export default createStore;
