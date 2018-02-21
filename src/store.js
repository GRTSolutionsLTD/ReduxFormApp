import {
    createStore,
    combineReducers,
    applyMiddleware
  } from 'redux';
  import {
    modelReducer,
    formReducer
  } from 'react-redux-form';
  import thunk from 'redux-thunk';
  // Logger with default options 
import logger from 'redux-logger'

  const initialUserState = {
    firstName: '',
    lastName: ''
  };
  
  const store = applyMiddleware(thunk,logger)(createStore)(combineReducers({
    // user: modelReducer('user', initialUserState),
   // userForm: formReducer('user', initialUserState),
    form: formReducer
  }));
  
  export default store;




 