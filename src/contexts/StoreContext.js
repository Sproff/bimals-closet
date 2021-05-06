import React, {useState, createContext} from 'react';
import {cartStorage} from '../services/storage';

const StoreContext = createContext([{}, () => {}]);

const StoreProvider = ({children}) => {
  const [state, setState] = useState(cartStorage || []);

  return (
    <StoreContext.Provider value={[state, setState]}>
      {children}
    </StoreContext.Provider>
  );
};

export {StoreContext, StoreProvider};
