import { createStore, applyMiddleware } from 'redux';
import { createLogicMiddleware } from 'redux-logic';
import rootReducer from './reducers/rootReducer';
import arrLogic from './logic/rootLogic';

const deps = {
  // optional injected dependencies for logic
  // anything you need to have available in your logic
  A_SECRET_KEY: 'dsfjsdkfjsdlfjls',
};

const logicMiddleware = createLogicMiddleware(arrLogic, deps);

const middleware = applyMiddleware(
  logicMiddleware
);

const enhancer = middleware;

export default function configureStore() {
  const store = createStore(rootReducer, enhancer);
  return store;
}