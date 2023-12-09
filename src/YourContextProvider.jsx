// YourContextProvider.js
import React, { createContext, useState } from 'react';

const YourContext = createContext();

const YourContextProvider = ({ children }) => {
  const [contextValues, setContextValues] = useState({
    basename: '', // Set an appropriate default value
  });

  return (
    <YourContext.Provider value={contextValues}>
      {children}
    </YourContext.Provider>
  );
};

export { YourContext, YourContextProvider };
