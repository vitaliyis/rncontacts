import React, {createContext, useReducer} from 'react';
import auth from "./reducers/auth";
import contacts from "./reducers/contacts";
import contactsInitialState from "./initialsStates/contactsInitialState";
import authInitialState from "./initialsStates/authState";

export const GlobalContext = createContext();

const GlobalProvider = ({children}) => {
  const [authState, authDispatch] = useReducer(auth, authInitialState);
  const [contactsState, contactsDispatch] = useReducer(contacts, contactsInitialState);
  return (
    <GlobalContext.Provider
      value={{authState, authDispatch, contactsState, contactsDispatch}}
    >
      {children}
    </GlobalContext.Provider>
  )
}

export default GlobalProvider;