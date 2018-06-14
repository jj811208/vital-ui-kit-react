import { createStore, combineReducers, applyMiddleware, compose } from 'redux';

const initialState = {};

const AppReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ACTION':
      return state;
    default:
      return state;
  }
};

// Add addiotnal middleware and enhancers here
const middleware = [];
const enhancers = [];

const composedEnhancrs = compose(applyMiddleware(...middleware), ...enhancers);

export default createStore(
  combineReducers({
    app: AppReducer,
  }),
  initialState,
  composedEnhancrs
);
